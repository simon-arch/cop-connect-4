import StartPage from "./pages/StartPage.tsx";
import GamePage from "./pages/GamePage.tsx";
import PlayerProvider from "./components/providers/PlayerProvider.tsx";
import SettingsProvider from "./components/providers/SettingsProvider.tsx";
import ResultsPage from "./pages/ResultsPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
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
