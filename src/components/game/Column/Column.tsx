import style from './Column.module.css';
import Cell from "../Cell/Cell.tsx";
import type {CellOwner} from "../../../types/cellOwner.ts";
import {rows} from "../../../constants.ts";
import {useGrid} from "../../../hooks/useGrid.tsx";
import {usePlayer} from "../../../hooks/usePlayer.tsx";

interface ColumnProps {
    index: number;
    cells: CellOwner[];
}

export default function Column(props: ColumnProps) {
    const {append} = useGrid();
    const {player} = usePlayer();
    const cells = [...props.cells];

    while (cells.length < rows)
        cells.push(null);
    const reversed = [...cells].reverse();

    const onClick = () => {
        append(props.index, player);
    }

    return (
        <div className={style.column} onClick={onClick}>
            {reversed.map((cell: CellOwner, row: number) => (
                <Cell owner={cell} key={row.toString()}/>
            ))}
        </div>
    );
}