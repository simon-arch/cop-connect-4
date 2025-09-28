import {type ReactNode, useCallback, useState} from "react";
import type {CellOwner} from "../../types/cellOwner.ts";
import {GridContext} from "../../hooks/useGrid.tsx";
import {usePlayer} from "../../hooks/usePlayer.tsx";
import {useSettings} from "../../hooks/useSettings.tsx";

interface GridProviderProps {
    children: ReactNode;
    onEnd: (winner: CellOwner) => void;
}

const getEmptyGrid = (cols: number): CellOwner[][] => Array.from({length: cols}, () => []);

const getCell = (array: CellOwner[][], col: number, row: number, cols: number, rows: number): CellOwner => {
    if (col < 0 || col >= cols) return null;
    if (row < 0 || row >= rows) return null;
    if (!array[col]) return null;
    return array[col][row] || null;
}

const findWinner = (grid: CellOwner[][], rows: number, cols: number, winSize: number) => {
    const directions = [
    //  [x, y]
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1],
    ];

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            const cell = getCell(grid, col, row, cols, rows);
            if (!cell) continue;

            for (const [dx, dy] of directions) {
                let count = 1;
                let x = col + dx;
                let y = row + dy;

                while (getCell(grid, x, y, cols, rows) === cell && count < winSize) {
                    count++;
                    x += dx;
                    y += dy;
                }
                if (count === winSize) return cell;
            }
        }
    }

    return grid.every(col => col.length === rows) ? null : undefined;
}

const GridProvider = ({children, onEnd}: GridProviderProps) => {
    const {settings} = useSettings();
    const {next} = usePlayer();
    const [grid, setGrid] = useState(getEmptyGrid(settings.gridCols));
    const [ended, setEnded] = useState(false);

    const append = useCallback((colIndex: number, owner: CellOwner) => {
        if (ended) return;

        const modified = grid.map((col, index) => {
            if (index == colIndex && col.length < settings.gridRows) {
                col.push(owner);
                next();
            }
            return col;
        })
        setGrid(modified);

        const winner = findWinner(modified, settings.gridRows, settings.gridCols, settings.winSize);
        if (winner !== undefined) {
            onEnd(winner);
            setEnded(true);
        }
    }, [ended])

    return (
        <GridContext.Provider value={{append, grid, ended}}>
            {children}
        </GridContext.Provider>
    )
}

export default GridProvider;