import style from './Cell.module.css';
import type {CellOwner} from "../../../types/cellOwner.ts";

interface CellProps {
    owner: CellOwner;
}

export default function Cell({owner}: CellProps) {
    return <div className={`${style.cell} ${style.animated} ${owner && style[owner]}`}/>;
}