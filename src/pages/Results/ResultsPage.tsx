import style from './Results.module.css';
import {Button} from "@components/ui/Button/Button.tsx";
import {Title} from "@components/ui/Title/Title.tsx";
import {useNavigate} from "react-router-dom";
import {useUserDataStore} from "@stores/useUserDataStore.tsx";

export const ResultsPage = () => {
    const navigate = useNavigate();
    const {userData} = useUserDataStore();
    const onStart = () => navigate("/start");
    const onLink = (nickname: string) => navigate(`/score/${nickname}`);

    userData.sort((a, b) => b.wins - a.wins);
    return (
        <div className={style.Page}>
            <Title>Results</Title>
            <div className={style.Score}>
                {
                    userData.map((entry) =>
                        <a onClick={() => onLink(entry.nickname)} key={entry.nickname}>{entry.nickname} {entry.wins}</a>
                    )
                }
            </div>
            <Button onClick={onStart}>Back to Start</Button>
        </div>
    );
}