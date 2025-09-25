import style from './Board.module.css';
import Column from '../Column/Column.tsx';
import type {CellOwner} from "../../../types/cellOwner.ts";
import {rows, cols} from "../../../constants.ts";

interface BoardProps {
    grid: CellOwner[][];
}

export default function Board(props: BoardProps) {
    const columns = Array(cols).fill(null).map((_, col) => {
        const cells: CellOwner[] = [];
        for (let row = 0; row < rows; row++)
            cells.push(props.grid[row][col]);
        return cells;
    });

    return (
        <div className={style.board}>
            {columns.map((cells, col) => (
                <Column key={col} cells={cells}/>
            ))}
        </div>
    );
}