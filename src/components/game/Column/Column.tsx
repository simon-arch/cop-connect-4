import style from './Column.module.css';
import type {CellOwner} from "../../../types/cellOwner.ts";
import Cell from "../Cell/Cell.tsx";

interface ColumnProps {
    cells: CellOwner[];
}

export default function Column(props: ColumnProps) {
    return (
        <div className={style.column}>
            {props.cells.map((cell: CellOwner, row: number) => (
                <Cell owner={cell} key={row.toString()}/>
            ))}
        </div>
    );
}