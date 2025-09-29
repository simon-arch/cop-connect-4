import style from './Score.module.css';
import Button from "../../components/ui/Button/Button.tsx";
import Title from "../../components/ui/Title/Title.tsx";
import secondsToTime from "../../utils/secondsToTime.ts";
import {useNavigate, useParams} from "react-router-dom";
import type {UserData} from "../../types/userData.ts";

const ScorePage = () => {
    const navigate = useNavigate();
    const {nickname} = useParams();
    const onResults = () => navigate("/results");

    const mockUserData: UserData = {
        playtime: 150,
        wins: 25
    }

    const time = secondsToTime(mockUserData.playtime);
    const format = (val: number) => val.toString().padStart(2, '0');

    return (
        <div className={style.Page}>
            <Title>Score - {nickname}</Title>
            <table className={style.Table}>
                <tbody>
                <tr>
                    <td>Playtime</td>
                    <td>
                        {format(time.days)}:{format(time.hours)}:{format(time.minutes)}:{format(time.seconds)}
                    </td>
                </tr>
                <tr>
                    <td>Wins</td>
                    <td>{mockUserData.wins}</td>
                </tr>
                </tbody>
            </table>
            <Button onClick={onResults}>Back to Results</Button>
        </div>
    );
}

export default ScorePage;