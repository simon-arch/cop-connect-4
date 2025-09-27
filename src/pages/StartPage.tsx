import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";

interface StartPageProps {
    onStart: () => void;
}

const StartPage = (props: StartPageProps) => (
    <div>
        <Title>Page - Start</Title>
        <Button onClick={props.onStart}>Start Game</Button>
        <p>
            Players choose yellow or red discs. They drop the discs into the grid, starting in the middle or at the edge to stack their colored discs upwards, horizontally, or diagonally.
            Use strategy to block opponents while aiming to be the first player to get 4 in a row to win.
        </p>
    </div>
);

export default StartPage;