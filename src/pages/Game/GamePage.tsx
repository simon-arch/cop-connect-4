import style from './Game.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTimer } from '@hooks/useTimer.tsx';
import { usePlayerStore } from '@stores/usePlayerStore.tsx';
import { GridProvider } from '@components/providers/GridProvider/GridProvider.tsx';
import { Button } from '@components/ui/Button/Button.tsx';
import { Title } from '@components/ui/Title/Title.tsx';
import { Board } from '@components/game/Board/Board.tsx';
import { Modal } from '@components/ui/Modal/Modal.tsx';
import type { CellOwner } from '@interfaces/cellOwner.ts';
import { secondsToTime } from '@utils/secondsToTime';
import { padTime } from '@utils/padTime.ts';

export const GamePage = () => {
	const navigate = useNavigate();
	const [winner, setWinner] = useState<CellOwner | undefined>(undefined);
	const [modalOpen, setModalOpen] = useState(false);
	const { player } = usePlayerStore();

	const { seconds, stopTimer } = useTimer();
	const time = secondsToTime(seconds);

	const onEnd = (winner: CellOwner) => {
		stopTimer();
		setWinner(winner);
		setModalOpen(true);
	};

	const onBack = () => navigate('/start');
	const onResults = () => navigate('/results');

	const title =
		winner === undefined ? player : winner ? `${winner} Won` : 'Tie';

	return (
		<div className={style.Page}>
			<Title>Game - {title}</Title>
			<span>
				{padTime(time.days)}:{padTime(time.hours)}:
				{padTime(time.minutes)}:{padTime(time.seconds)}
			</span>
			<GridProvider onEnd={onEnd}>
				<Board />
			</GridProvider>
			<Button onClick={onBack}>Back to Start</Button>
			{modalOpen && (
				<Modal onClose={() => setModalOpen(false)}>
					<div className={style.ModalContent}>
						<div>End of the game. {title}!</div>
						<div className={style.ModalButtons}>
							<Button onClick={onBack}>Play again</Button>
							<Button onClick={onResults}>Finish session</Button>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};
