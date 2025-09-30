import style from './Board.module.css';
import { Column } from '@components/game/Column/Column.tsx';
import { useGrid } from '@hooks/useGrid.tsx';

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
