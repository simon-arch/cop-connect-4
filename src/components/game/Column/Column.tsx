import style from './Column.module.css';
import Cell from "../Cell/Cell.tsx";
import type {CellOwner} from "../../../types/cellOwner.ts";
import {rows} from "../../../constants.ts";
import {useGrid} from "../../../hooks/useGrid.tsx";

interface ColumnProps {
    index: number;
    cells: CellOwner[];
}

export default function Column(props: ColumnProps) {
    const grid = useGrid();
    const cells = [...props.cells];

    while (cells.length < rows)
        cells.push(null);
    const reversed = [...cells].reverse();

    const onClick = () => {
        grid.append(props.index, "P1");
    }

    return (
        <div className={style.column} onClick={onClick}>
            {reversed.map((cell: CellOwner, row: number) => (
                <Cell owner={cell} key={row.toString()}/>
            ))}
        </div>
    );
}