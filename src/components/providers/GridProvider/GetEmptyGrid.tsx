import type { CellOwner } from '@interfaces/cellOwner.ts';

export const getEmptyGrid = (cols: number): CellOwner[][] =>
	Array.from({ length: cols }, () => []);
