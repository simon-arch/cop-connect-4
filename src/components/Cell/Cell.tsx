import style from './Cell.module.css';
import type {CellOwner} from "../../types/CellOwner.ts";
import {useState} from "react";

interface CellProps {
    owner: CellOwner;
}

export default function Cell(props: CellProps) {
    const [owner, setOwner] = useState(props.owner);

    // TODO: current onClick event is temporary
    return <div className={style.cell} onClick={() => setOwner("P1")}>{owner}</div>;
}