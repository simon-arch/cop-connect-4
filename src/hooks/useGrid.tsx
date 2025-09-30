import { createContext, useContext } from 'react';
import type { CellOwner } from '@interfaces/cellOwner.ts';

interface GridContextType {
	append: (colIndex: number, owner: CellOwner) => void;
	grid: Readonly<CellOwner[][]>;
	ended: boolean;
}

export const GridContext = createContext<GridContextType | null>(null);

export const useGrid = () => {
	const context = useContext(GridContext);
	if (context === null) throw new Error('Grid context is null');

	return context;
};
