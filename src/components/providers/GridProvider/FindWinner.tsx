import type { CellOwner } from '@interfaces/cellOwner.ts';
import { getCell } from '@components/providers/GridProvider/GetCell.tsx';

export const findWinner = (
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
