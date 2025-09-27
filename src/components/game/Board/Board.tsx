import style from './Board.module.css';
import Column from '../Column/Column.tsx';
import {useGrid} from "../../../hooks/useGrid.tsx";

export default function Board() {
    const {grid} = useGrid();

    return (
        <div className={style.board}>
            {grid.map((cells, colIndex) => (
                <Column key={colIndex} index={colIndex} cells={cells}/>
            ))}
        </div>
    );
}