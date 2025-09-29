import style from './Results.module.css';
import Button from "../../components/ui/Button/Button.tsx";
import Title from "../../components/ui/Title/Title.tsx";
import {useNavigate} from "react-router-dom";

const ResultsPage = () => {
    const navigate = useNavigate();
    const onStart = () => navigate("/start");
    const onLink = (nickname: string) => navigate(`/score/${nickname}`);

    type mockType = {
        nickname: string,
        score: number
    }

    const mockScores: mockType[] = [
        { nickname: "SIM", score: 0 },
        { nickname: "WIN", score: 1111 },
        { nickname: "JHN", score: 2222 },
        { nickname: "MRY", score: 1553 }
    ]

    mockScores.sort((a, b) => b.score - a.score);

    return (
        <div className={style.Page}>
            <Title>Results</Title>
            <div className={style.Score}>
                {
                    mockScores.map((entry) =>
                        <a onClick={() => onLink(entry.nickname)} key={entry.nickname}>{entry.nickname} {entry.score}</a>
                    )
                }
            </div>
            <Button onClick={onStart}>Back to Start</Button>
        </div>
    );
}

export default ResultsPage;