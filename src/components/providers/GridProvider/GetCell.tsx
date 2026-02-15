import type { CellOwner } from '@interfaces/cellOwner.ts';

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
