import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import Board from "../components/game/Board/Board.tsx";
import GridProvider from "../components/providers/GridProvider.tsx";
import PlayerProvider from "../components/providers/PlayerProvider.tsx";

interface GamePageProps {
    onFinish: () => void;
}

const GamePage = (props: GamePageProps) => {
    return (
        <PlayerProvider>
            <GridProvider>
                <Title>Page - Game</Title>
                <Button onClick={props.onFinish}>Finish Game</Button>
                <Board/>
            </GridProvider>
        </PlayerProvider>
    );
};

export default GamePage;
