import style from './Column.module.css';
import Cell from "../Cell/Cell.tsx";
import type {CellOwner} from "../../../types/cellOwner.ts";

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