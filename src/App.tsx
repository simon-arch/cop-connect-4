import {
	CookieConsent,
	type CookieFormValues,
} from '@components/compliance/CookieConsent.tsx';
import { WelcomePage } from './pages/Welcome/WelcomePage.tsx';
import { StartPage } from './pages/Start/StartPage.tsx';
import { GamePage } from './pages/Game/GamePage.tsx';
import { ResultsPage } from './pages/Results/ResultsPage.tsx';
import { ScorePage } from './pages/Score/ScorePage.tsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { DismissalPage } from '@src/pages/Consent/DismissalPage.tsx';

/**
 * @ignore
 */
function App() {
	const [consent, setConsent] = useState<CookieFormValues | null>(null);
	const requiredConsents =
		consent?.eula && consent?.privacy && consent?.personal && consent?.age;

	if (consent === null)
		return <CookieConsent onChange={setConsent} />;

	if (!requiredConsents)
		return <DismissalPage />;

	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="/start" element={<StartPage />} />
			<Route path="/game" element={<GamePage />} />
			<Route path="/results" element={<ResultsPage />} />
			<Route path="/score/:nickname" element={<ScorePage />} />
		</Routes>
	);
}

export default App;