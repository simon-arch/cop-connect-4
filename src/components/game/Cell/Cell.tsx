import style from './Cell.module.css';
import type {CellOwner} from "../../../types/cellOwner.ts";

interface CellProps {
    owner: CellOwner;
}

export default function Cell(props: CellProps) {
    return <div className={`${style.cell} ${props.owner && style[props.owner!]}`}/>;
}