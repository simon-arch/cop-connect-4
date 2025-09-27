import style from './Column.module.css';
import Cell from "../Cell/Cell.tsx";
import type {CellOwner} from "../../../types/cellOwner.ts";
import {rows} from "../../../constants.ts";

interface ColumnProps {
    cells: CellOwner[];
}

export default function Column({cells}: ColumnProps) {
    while (cells.length < rows)
        cells.push(null);
    const reversed = [...cells].reverse();

    return (
        <div className={style.column}>
            {reversed.map((cell: CellOwner, row: number) => (
                <Cell owner={cell} key={row.toString()}/>
            ))}
        </div>
    );
}