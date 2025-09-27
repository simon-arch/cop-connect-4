import {createContext, useContext} from "react";
import type {CellOwner} from "../types/cellOwner.ts";

interface GridContextType {
    append: (colIndex: number, owner: CellOwner) => void
    grid: Readonly<CellOwner[][]>
}

export const GridContext = createContext<GridContextType | null>(null)

export const useGrid = () => {
    const context = useContext(GridContext);
    if (context === null)
        throw new Error("Grid context is null");

    return context;
}