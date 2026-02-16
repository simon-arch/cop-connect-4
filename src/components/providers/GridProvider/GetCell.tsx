import type { CellOwner } from '@contracts/cellOwner.ts';

/**
 * Retrieves the owner of a cell at specific coordinates.
 * @remarks The function performs boundary checks against the grid dimensions.
 * If the requested coordinates are out of bounds or the cell is empty,
 * it returns `null`.
 * @param array - The 2D array representing the board.
 * @param col - The column index to check.
 * @param row - The row index to check.
 * @param cols - The total number of columns in the grid.
 * @param rows - The total number of rows in the grid.
 * @returns The {@link CellOwner} of the specified cell, or `null` if the cell
 * is empty or out of bounds.
 * @example
 * ```tsx
 * // Checking the cell to the right of the current position
 * const neighbor = getCell(grid, currentCol + 1, currentRow, 7, 6);
 * ```
 * @category Logic
 */
export const getCell = (
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
