import type { CellOwner } from '@contracts/cellOwner.ts';

/**
 * Generates an empty game board structure.
 * The grid is represented as an array of vertical-first columns.
 * @remarks Each column starts as an empty array `[]`. When a player makes a move, their
 * {@link CellOwner} disc is pushed into the respective column array.
 * @param cols - The total number of columns in the grid.
 * @returns A 2D array representing the board.
 * @category Logic
 */
export const getEmptyGrid = (cols: number): CellOwner[][] =>
	Array.from({ length: cols }, () => []);
