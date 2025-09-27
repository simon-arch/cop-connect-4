import {type ReactNode, useCallback, useState} from "react";
import type {CellOwner} from "../../types/cellOwner.ts";
import {cols, rows} from "../../constants.ts";
import {GridContext} from "../../hooks/useGrid.tsx";
import {usePlayer} from "../../hooks/usePlayer.tsx";

interface GridProviderProps {
    children: ReactNode;
    onEnd: (winner: CellOwner) => void;
}

const getCustomGrid = (): CellOwner[][] => {
    return [
        ["P1", "P2"], // col-1
        [], // col-2
        ["P1", "P2", "P1", "P2"], // col-3
        [], // col-4
        ["P2"], // col-5
        ["P1", "P2", "P2"], // col-6
        ["P1", "P1", "P1", "P2"], // col-7
    ];
};

const getCell = (array: CellOwner[][], col: number, row: number): CellOwner => {
    if (col < 0 || col >= cols) return null;
    if (row < 0 || row >= rows) return null;
    if (!array[col]) return null;
    return array[col][row] || null;
}

const findWinner = (grid: CellOwner[][]) => {
    const directions = [
    //  [x, y]
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1],
    ];

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            const cell = getCell(grid, col, row);
            if (!cell) continue;

            for (const [dx, dy] of directions) {
                let count = 1;
                let x = col + dx;
                let y = row + dy;

                while (getCell(grid, x, y) === cell && count < 4) {
                    count++;
                    x += dx;
                    y += dy;
                }

                if (count === 4) return cell;
            }
        }
    }

    return grid.every(col => col.length === rows) ? null : undefined;
}

const GridProvider = ({children, onEnd}: GridProviderProps) => {
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

        const winner = findWinner(grid)
        if (winner !== undefined)
            onEnd(winner);
    }, [])

    return (
        <GridContext.Provider value={{append, grid}}>
            {children}
        </GridContext.Provider>
    )
}

export default GridProvider;