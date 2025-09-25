import style from './Cell.module.css';
import type {CellOwner} from "../../../types/cellOwner.ts";
import {useState} from "react";

interface CellProps {
    owner: CellOwner;
}

export default function Cell(props: CellProps) {
    const [owner, setOwner] = useState(props.owner);

    const handleClick = () => {
        const states: CellOwner[] = ['P1', 'P2', 'NN'];
        const nextIndex = (states.indexOf(owner) + 1) % states.length;
        setOwner(states[nextIndex]);
    };

    // TODO: current onClick event is temporary
    return <div className={style.cell} onClick={handleClick}>{owner}</div>;
}