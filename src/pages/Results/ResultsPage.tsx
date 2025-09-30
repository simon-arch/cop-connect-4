import style from './Results.module.css';
import Button from "../../components/ui/Button/Button.tsx";
import Title from "../../components/ui/Title/Title.tsx";
import {useNavigate} from "react-router-dom";
import type {UserData} from "../../types/userData.ts";

const ResultsPage = () => {
    const navigate = useNavigate();
    const onStart = () => navigate("/start");
    const onLink = (nickname: string) => navigate(`/score/${nickname}`);

    // TODO: replace with Global State data pulled from LocalStorage
    const mockScores: UserData[] = [
        {nickname: "SIM", wins: 0, playtime: 0},
        {nickname: "WIN", wins: 3, playtime: 0},
        {nickname: "JHN", wins: 1, playtime: 0},
        {nickname: "MRY", wins: 8, playtime: 0}
    ]

    mockScores.sort((a, b) => b.wins - a.wins);

    return (
        <div className={style.Page}>
            <Title>Results</Title>
            <div className={style.Score}>
                {
                    mockScores.map((entry) =>
                        <a onClick={() => onLink(entry.nickname)} key={entry.nickname}>{entry.nickname} {entry.wins}</a>
                    )
                }
            </div>
            <Button onClick={onStart}>Back to Start</Button>
        </div>
    );
}

export default ResultsPage;