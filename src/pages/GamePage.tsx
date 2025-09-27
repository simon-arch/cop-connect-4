import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import Board from "../components/game/Board/Board.tsx";
import GridProvider from "../components/providers/GridProvider.tsx";
import PlayerProvider from "../components/providers/PlayerProvider.tsx";
import type {CellOwner} from "../types/cellOwner.ts";

interface GamePageProps {
    onFinish: (winner: CellOwner) => void;
}

const GamePage = (props: GamePageProps) => {
    return (
        <PlayerProvider>
            <GridProvider onEnd={(winner) => props.onFinish(winner)}>
                <Title>Page - Game</Title>
                <Button onClick={() => props.onFinish(null)}>Finish Game</Button>
                <Board/>
            </GridProvider>
        </PlayerProvider>
    );
};

export default GamePage;
