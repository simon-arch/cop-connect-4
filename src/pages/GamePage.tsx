import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import Board from "../components/game/Board/Board.tsx";
import type {CellOwner} from "../types/cellOwner.ts";
import {useCallback, useState} from "react";
import {GridContext} from "../hooks/useGrid.tsx";
import {rows} from "../constants.ts";

interface GamePageProps {
    onFinish: () => void;
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

const GamePage = (props: GamePageProps) => {
    const [grid, setGrid] = useState(getCustomGrid());

    const append = useCallback((colIndex: number, owner: CellOwner) => {
        const modified = grid.map((col, index) => {
            if (index == colIndex && col.length < rows)
                col.push(owner);
            return col;
        })
        setGrid(modified);
    }, [])

    return (
        <div>
            <GridContext.Provider value={{append}}>
                <Title>Page - Game</Title>
                <Button onClick={props.onFinish}>Finish Game</Button>
                <Board grid={grid}/>
            </GridContext.Provider>
        </div>
    );
};

export default GamePage;
