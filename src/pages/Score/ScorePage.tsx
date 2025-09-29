import style from './Score.module.css';
import Button from "../../components/ui/Button/Button.tsx";
import Title from "../../components/ui/Title/Title.tsx";
import secondsToTime from "../../utils/secondsToTime.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useUserDataStorage} from "../../hooks/useUserDataStorage.tsx";

const ScorePage = () => {
    const navigate = useNavigate();
    const {nickname} = useParams();
    const userData = useUserDataStorage(nickname);
    const onResults = () => navigate("/results");

    const time = userData ? secondsToTime(userData.playtime) : null;
    const format = (val: number) => val.toString().padStart(2, '0');

    return (
        <div className={style.Page}>
            <Title>Score - {nickname}</Title>
                <table className={style.Table}>
                    <tbody>
                    <tr>
                        <td>Playtime</td>
                        <td>{userData && time
                            ? `${format(time.days)}:${format(time.hours)}:${format(time.minutes)}:${format(time.seconds)}`
                            : "No Data"}
                        </td>
                    </tr>
                    <tr>
                        <td>Wins</td>
                        <td>{userData
                            ? userData.wins
                            : "No Data"}
                        </td>
                    </tr>
                    </tbody>
                </table>
            <Button onClick={onResults}>Back to Results</Button>
        </div>
    );
}

export default ScorePage;