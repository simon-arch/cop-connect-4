import style from './Welcome.module.scss';
import Button from "../../components/ui/Button/Button.tsx";
import {useNavigate} from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
    const onStart = () => navigate("/start");
    const logo = 'Connect-4';

    return (
        <div className={style.Welcome}>
            <div className={style.Logo}>
                {logo.split('').map((char, index) =>
                    <span key={index}>{char}</span>
                )}
            </div>
            <div className={style.Author}>
                Artem Vashchenko - 2025
            </div>
            <Button onClick={onStart}>Start</Button>
        </div>
    );
}

export default WelcomePage;