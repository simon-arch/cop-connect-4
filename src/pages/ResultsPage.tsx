import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import {useNavigate} from "react-router-dom";

const ResultsPage = () => {
    const navigate = useNavigate();
    const onStart = () => navigate("/start");

    return (
        <div>
            <Title>Page - Results</Title>
            <Button onClick={onStart}>Start Again</Button>
            <p>
                Results and/or action history will be shown here.
            </p>
        </div>
    );
}

export default ResultsPage;