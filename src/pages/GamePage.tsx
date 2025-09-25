import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import Board from "../components/game/Board/Board.tsx";
import type {CellOwner} from "../types/cellOwner.ts";
import {useState} from "react";
import {rows, cols} from "../constants.ts";

interface GamePageProps {
    onFinish: () => void;
}

// @ts-ignore : currently unused on purpose
const getEmptyGrid = (): CellOwner[][] =>
    Array(rows)
        .fill(null)
        .map(() => Array(cols)
            .fill("NN"));

const getCustomGrid = (): CellOwner[][] => {
    return [
        ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
        ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
        ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
        ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
        ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
        ["NN", "P1", "P1", "P2", "P2", "P2", "NN"],
    ];
};

const GamePage = (props: GamePageProps) => {
    const [grid, _] = useState(getCustomGrid());

    return (
        <div>
            <Title>Page - Game</Title>
            <Button onClick={props.onFinish}>Finish Game</Button>
            <Board grid={grid}/>
        </div>
    );
};

export default GamePage;