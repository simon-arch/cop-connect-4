import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";

interface ResultsPageProps {
    onRestart: () => void;
}

const ResultsPage = (props: ResultsPageProps) => (
    <div>
        <Title>Page - Results</Title>
        <Button onClick={props.onRestart}>Play Again</Button>
        <p>
            Results and/or action history will be shown here.
        </p>
    </div>
);

export default ResultsPage;