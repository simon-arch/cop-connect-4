import { createContext, useContext } from 'react';
import type { CellOwner } from '@contracts/cellOwner.ts';

/**
 * Defines the shape of the Context used to manage the Connect 4 board state.
 * @remarks Allows for state sharing between
 * the grid, columns, and individual cells.
 * @category Interfaces
 */
export interface GridContextType {
	/**
	 * Appends a player's disc to a specific column.
	 * @param colIndex - The index of the column where the disc is dropped.
	 * @param owner - The player who is making the move.
	 */
	append: (colIndex: number, owner: CellOwner) => void;

	/**
	 * A read-only 2D array representation of the game board.
	 * @remarks The outer array represents columns,
	 * and the inner array represents rows.
	 */
	grid: Readonly<CellOwner[][]>;

	/**
	 * Indicates whether the current game has reached an end.
	 * @remarks Prevents further moves when set to `true`.
	 */
	ended: boolean;
}

/**
 * React Context object for the Grid.
 * @remarks Initialized as `null` and should be provided by a `GridProvider`.
 * @category Hooks
 */
export const GridContext = createContext<GridContextType | null>(null);

/**
 * A hook to access the GridContext.
 * @throws {Error} If the hook is used outside a `GridProvider`.
 * @returns {GridContextType} The current grid state and actions.
 * @example
 * ```tsx
 * const { grid, append } = useGrid();
 * ```
 * @category Hooks
 */
export const useGrid = (): GridContextType => {
	const context = useContext(GridContext);
	if (context === null) throw new Error('Grid context is null');

	return context;
};
