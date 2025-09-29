import StartPage from "./pages/Start/StartPage.tsx";
import GamePage from "./pages/Game/GamePage.tsx";
import PlayerProvider from "./components/providers/PlayerProvider.tsx";
import SettingsProvider from "./components/providers/SettingsProvider.tsx";
import ResultsPage from "./pages/Results/ResultsPage.tsx";
import WelcomePage from "./pages/Welcome/WelcomePage.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <SettingsProvider>
            <PlayerProvider>
                <Routes>
                    <Route path="/"        element={<WelcomePage/>}/>
                    <Route path="/start"   element={<StartPage/>}/>
                    <Route path="/game"    element={<GamePage/>}/>
                    <Route path="/results" element={<ResultsPage/>}/>
                </Routes>
            </PlayerProvider>
        </SettingsProvider>
    );
}

export default App
