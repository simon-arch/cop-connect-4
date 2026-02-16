import style from './Board.module.css';
import { Column } from '@components/game/Column/Column.tsx';
import { useGrid } from '@hooks/useGrid.tsx';

/**
 * The primary layout component for the Connect 4 playing field.
 * Consumes the current board state from {@link useGrid} and
 * dynamically renders a series of {@link Column} components based on the grid's
 * dimensions.
 * @example
 * ```tsx
 * <GridProvider>
 *    <Board />
 * </GridProvider>
 * ```
 * @category Components
 */
export function Board() {
	const { grid } = useGrid();

	return (
		<div className={style.board}>
			{grid.map((cells, colIndex) => (
				<Column key={colIndex} index={colIndex} cells={cells} />
			))}
		</div>
	);
}
