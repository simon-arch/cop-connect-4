import style from './Board.module.css';
import Column from '../Column/Column';
import type {CellOwner} from "../../types/CellOwner.ts";
import {rows, cols} from "../../config/constants.ts";

interface BoardProps {
    grid: CellOwner[][];
}

export default function Board({ grid } : BoardProps) {
    const columns = Array(cols).fill(null).map((_, col) => {
        const cells: CellOwner[] = [];
        for (let row = 0; row < rows; row++)
            cells.push(grid[row][col]);
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