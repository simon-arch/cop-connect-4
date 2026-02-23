import style from './Dismissal.module.css';
import { Button } from '@components/ui/Button/Button.tsx';
import { setCookie } from '@utils/cookies.ts';

export const DismissalPage = () => {
	const onClick = () => {
		setCookie('consent', '', -1);
		location.reload();
	}

	return (
		<div className={style.Container}>
			<h2>Cookies Are Required to Use This Site</h2>
			<p>
				Mandatory consents have not been given, or cookies may have been
				altered. Access to the site is restricted to protect user
				safety.
			</p>
			<Button onClick={onClick}>
				Reset
			</Button>
		</div>
	);
};
