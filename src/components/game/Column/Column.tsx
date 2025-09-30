import style from './Column.module.css';
import Cell from "../Cell/Cell.tsx";
import {useGrid} from "../../../hooks/useGrid.tsx";
import type {CellOwner} from "../../../types/cellOwner.ts";
import useGameSettingsStore from "../../../stores/useGameSettingsStore.tsx";
import usePlayerStore from "../../../stores/usePlayerStore.tsx";

interface ColumnProps {
    index: number;
    cells: CellOwner[];
}

export default function Column(props: ColumnProps) {
    const {append, ended} = useGrid();
    const {settings: {gridRows}} = useGameSettingsStore();
    const {player} = usePlayerStore();

    const cells = [...props.cells];
    while (cells.length < gridRows)
        cells.push(null);
    const reversed = [...cells].reverse();

    const onClick = () => {
        append(props.index, player);
    }

    const playable = !ended && !reversed.every(cell => cell !== null);

    return (
        <div className={`${style.column} ${playable && style.playable} ${player && style[player]}`} onClick={onClick}>
            {reversed.map((cell: CellOwner, row: number) => (
                <Cell owner={cell} key={row.toString()}/>
            ))}
        </div>
    );
}