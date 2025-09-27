import {type ReactNode, useCallback, useState} from "react";
import type {CellOwner} from "../../types/cellOwner.ts";
import {rows} from "../../constants.ts";
import { GridContext } from "../../hooks/useGrid.tsx";
import {usePlayer} from "../../hooks/usePlayer.tsx";

interface GridProviderProps {
    children: ReactNode;
}

const getCustomGrid = (): CellOwner[][] => {
    return [
        ["P1", "P2"], // col-1
        [], // col-2
        ["P1", "P2", "P1", "P2"], // col-3
        [], // col-4
        ["P2"], // col-5
        ["P1", "P2", "P2"], // col-6
        ["P1", "P1", "P1", "P1",], // col-7
    ];
};

const GridProvider = ({children}: GridProviderProps) => {
    const [grid, setGrid] = useState(getCustomGrid());
    const {next} = usePlayer();

    const append = useCallback((colIndex: number, owner: CellOwner) => {
        const modified = grid.map((col, index) => {
            if (index == colIndex && col.length < rows) {
                col.push(owner);
                next();
            }
            return col;
        })
        setGrid(modified);
    }, [])

    return (
        <GridContext.Provider value={{append, grid}}>
            {children}
        </GridContext.Provider>
    )
}

export default GridProvider;