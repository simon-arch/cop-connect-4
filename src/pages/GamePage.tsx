import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import Board from "../components/game/Board/Board.tsx";
import GridProvider from "../components/providers/GridProvider.tsx";
import type {CellOwner} from "../types/cellOwner.ts";
import {usePlayer} from "../hooks/usePlayer.tsx";

interface GamePageProps {
    onFinish: (winner: CellOwner) => void;
}

const GamePage = (props: GamePageProps) => {
    const {player} = usePlayer();
    return (
        <GridProvider onEnd={(winner) => props.onFinish(winner)}>
            <Title>Page - Game [{player}]</Title>
            <Button onClick={() => props.onFinish(null)}>Finish Game</Button>
            <Board/>
        </GridProvider>
    );
};

export default GamePage;
