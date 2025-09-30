import style from './Score.module.css';
import { Button } from '@components/ui/Button/Button.tsx';
import { Title } from '@components/ui/Title/Title.tsx';
import { secondsToTime } from '@utils/secondsToTime.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserDataStore } from '@stores/useUserDataStore.tsx';
import { padTime } from '@utils/padTime.ts';

export const ScorePage = () => {
	const navigate = useNavigate();
	const { nickname } = useParams();
	const { userData } = useUserDataStore();
	const onResults = () => navigate('/results');

	const user = userData.find((u) => u.nickname === nickname);
	const time = user ? secondsToTime(user.playtime) : null;
	const winrate = user
		? user.games > 0
			? (user.wins / user.games) * 100
			: 0
		: null;

	return (
		<div className={style.Page}>
			<Title>Score - {nickname}</Title>
			<table className={style.Table}>
				<tbody>
					<tr>
						<td>Playtime</td>
						<td>
							{user && time
								? `${padTime(time.days)}:${padTime(time.hours)}:${padTime(time.minutes)}:${padTime(time.seconds)}`
								: 'No Data'}
						</td>
					</tr>
					<tr>
						<td>Games</td>
						<td>{user ? user.games : 'No Data'}</td>
					</tr>
					<tr>
						<td>Wins</td>
						<td>{user ? user.wins : 'No Data'}</td>
					</tr>
					<tr>
						<td>Winrate</td>
						<td>
							{user && winrate !== null
								? `${winrate.toFixed(1)}%`
								: 'No Data'}
						</td>
					</tr>
				</tbody>
			</table>
			<Button onClick={onResults}>Back to Results</Button>
		</div>
	);
};
