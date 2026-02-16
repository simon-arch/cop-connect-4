import type { CellOwner } from '@contracts/cellOwner.ts';
import { getCell } from '@components/providers/GridProvider/GetCell.tsx';

/**
 * Analyzes the current grid to determine the game's outcome.
 * @remarks The function iterates through every cell and checks four primary axes.
 * @param grid - The 2D array representing the board.
 * @param cols - The total number of columns in the grid.
 * @param rows - The total number of rows in the grid.
 * @param winSize - The number of consecutive discs required to win.
 * @returns
 * - {@link CellOwner}: If a player has won.
 * - `null`: If the game is a draw.
 * - `undefined`: If the game is still in progress.
 * @category Logic
 */
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
