import style from './Board.module.css';
import Column from '../Column/Column.tsx';
import type {CellOwner} from "../../../types/cellOwner.ts";

interface BoardProps {
    grid: CellOwner[][];
}

export default function Board(props: BoardProps) {
    return (
        <div className={style.board}>
            {props.grid.map((cells, colIndex) => (
                <Column key={colIndex} cells={cells}/>
            ))}
        </div>
    );
}