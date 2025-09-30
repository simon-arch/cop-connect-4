import { type ReactNode, useCallback, useMemo, useState } from 'react';
import type { CellOwner } from '@interfaces/cellOwner.ts';
import { GridContext } from '@hooks/useGrid.tsx';
import { useGameSettingsStore } from '@stores/useGameSettingsStore.tsx';
import { usePlayerStore } from '@stores/usePlayerStore.tsx';
import { useUserDataStore } from '@stores/useUserDataStore.tsx';

interface GridProviderProps {
	children: ReactNode;
	onEnd: (winner: CellOwner) => void;
}

const getEmptyGrid = (cols: number): CellOwner[][] =>
	Array.from({ length: cols }, () => []);

const getCell = (
	array: CellOwner[][],
	col: number,
	row: number,
	cols: number,
	rows: number,
): CellOwner => {
	if (col < 0 || col >= cols) return null;
	if (row < 0 || row >= rows) return null;
	if (!array[col]) return null;
	return array[col][row] || null;
};

const findWinner = (
	grid: CellOwner[][],
	rows: number,
	cols: number,
	winSize: number,
) => {
	const directions = [
		//  [x, y]
		[0, 1],
		[1, 0],
		[1, 1],
		[1, -1],
	];

	for (let col = 0; col < cols; col++) {
		for (let row = 0; row < rows; row++) {
			const cell = getCell(grid, col, row, cols, rows);
			if (!cell) continue;

			for (const [dx, dy] of directions) {
				let count = 1;
				let x = col + dx;
				let y = row + dy;

				while (
					getCell(grid, x, y, cols, rows) === cell &&
					count < winSize
				) {
					count++;
					x += dx;
					y += dy;
				}
				if (count === winSize) return cell;
			}
		}
	}

	return grid.every((col) => col.length === rows) ? null : undefined;
};

export const GridProvider = ({ children, onEnd }: GridProviderProps) => {
	const { settings } = useGameSettingsStore();
	const { nextPlayer } = usePlayerStore();
	const { userData, upsertUser } = useUserDataStore();
	const [grid, setGrid] = useState(getEmptyGrid(settings.gridCols));
	const [ended, setEnded] = useState(false);
	const start = useMemo(() => new Date(), []);

	const append = useCallback(
		(colIndex: number, owner: CellOwner) => {
			if (ended) return;

			const modified = grid.map((col, index) => {
				if (index == colIndex && col.length < settings.gridRows) {
					col.push(owner);
					nextPlayer();
				}
				return col;
			});
			setGrid(modified);

			const winner = findWinner(
				modified,
				settings.gridRows,
				settings.gridCols,
				settings.winSize,
			);
			if (winner !== undefined) {
				onEnd(winner);
				setEnded(true);

				const end = new Date();
				const duration = (end.getTime() - start.getTime()) / 1000;

				const P1Nickname = settings.playerName1;
				const P2Nickname = settings.playerName2;

				const P1 = userData.find((u) => u.nickname === P1Nickname);
				const P2 = userData.find((u) => u.nickname === P2Nickname);

				upsertUser({
					nickname: P1Nickname,
					playtime: (P1?.playtime || 0) + duration,
					wins: (P1?.wins || 0) + (winner === 'P1' ? 1 : 0),
					games: (P1?.games || 0) + 1,
				});

				upsertUser({
					nickname: P2Nickname,
					playtime: (P2?.playtime || 0) + duration,
					wins: (P2?.wins || 0) + (winner === 'P2' ? 1 : 0),
					games: (P2?.games || 0) + 1,
				});
			}
		},
		[ended],
	);

	return (
		<GridContext.Provider value={{ append, grid, ended }}>
			{children}
		</GridContext.Provider>
	);
};
