import style from './Game.module.css';
import Button from "../../components/ui/Button/Button.tsx";
import Title from "../../components/ui/Title/Title.tsx";
import Board from "../../components/game/Board/Board.tsx";
import Modal from "../../components/ui/Modal/Modal.tsx";
import GridProvider from "../../components/providers/GridProvider.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import type {CellOwner} from "../../types/cellOwner.ts";
import usePlayerStore from "../../stores/usePlayerStore.tsx";
import useTimer from "../../hooks/useTimer.tsx";
import secondsToTime from "../../utils/secondsToTime";
import padTime from "../../utils/padTime.ts";

const GamePage = () => {
    const navigate = useNavigate();
    const [winner, setWinner] = useState<CellOwner | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState(false);
    const {player} = usePlayerStore();
    const timer = useTimer();
    const time = secondsToTime(timer);

    const onEnd = (winner: CellOwner) => {
        setWinner(winner);
        setModalOpen(true);
    }

    const onRetry = () => navigate(0);
    const onBack = () => navigate("/start");
    const onResults = () => navigate("/results");

    const title = winner === undefined ? player : winner ? `${winner} Won` : "Tie";

    return (
        <div className={style.Page}>
            <Title>Game - {title}</Title>
            <span>{padTime(time.days)}:{padTime(time.hours)}:{padTime(time.minutes)}:{padTime(time.seconds)}</span>
            <GridProvider onEnd={onEnd}>
                <Board/>
            </GridProvider>
            <Button onClick={onBack}>Back to Start</Button>
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <div className={style.ModalContent}>
                        <div>
                            End of the game. {title}!
                        </div>
                        <div className={style.ModalButtons}>
                            <Button onClick={onRetry}>Play again</Button>
                            <Button onClick={onResults}>Finish session</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default GamePage;
