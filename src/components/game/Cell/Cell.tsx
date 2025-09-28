import style from './Cell.module.css';
import type {CellOwner} from "../../../types/cellOwner.ts";
import {useSettings} from "../../../hooks/useSettings.tsx";

interface CellProps {
    owner: CellOwner;
}

export default function Cell({owner}: CellProps) {
    const {settings: {playAnimations}} = useSettings();
    return <div className={`${style.cell} ${playAnimations && style.animated} ${owner && style[owner]}`}/>;
}