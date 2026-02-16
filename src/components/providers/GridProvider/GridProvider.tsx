import { type ReactNode, useCallback, useMemo, useState } from 'react';
import type { CellOwner } from '@contracts/cellOwner.ts';
import { GridContext } from '@hooks/useGrid.tsx';
import { useGameSettingsStore } from '@stores/useGameSettingsStore.tsx';
import { usePlayerStore } from '@stores/usePlayerStore.tsx';
import { useUserDataStore } from '@stores/useUserDataStore.tsx';
import { findWinner } from '@components/providers/GridProvider/FindWinner.tsx';
import { getEmptyGrid } from '@components/providers/GridProvider/GetEmptyGrid.tsx';

/**
 * Props for the {@link GridProvider} component.
 * @category Interfaces
 * */
export interface GridProviderProps {
	/** The child components that require access to grid state. */
	children: ReactNode;

	/** Callback triggered when a winner is identified or the game ends in a draw. */
	onEnd: (winner: CellOwner) => void;
}

/**
 * The state provider that orchestrates the Connect 4 game logic.
 * @remarks This component:
 * 1. Holds the 2D grid array and the game-over status.
 * 2. Ensures discs are only dropped in valid, non-full columns.
 * 3. Checks for win conditions after every move.
 * 4. Calculates game duration and updates the {@link UserData} store.
 * @category Providers
 */
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
