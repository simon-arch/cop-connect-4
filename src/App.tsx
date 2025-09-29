import StartPage from "./pages/StartPage.tsx";
import GamePage from "./pages/GamePage.tsx";
import PlayerProvider from "./components/providers/PlayerProvider.tsx";
import SettingsProvider from "./components/providers/SettingsProvider.tsx";
import {Route, Routes} from "react-router-dom";
import ResultsPage from "./pages/ResultsPage.tsx";

function App() {
    return (
        <SettingsProvider>
            <PlayerProvider>
                <Routes>
                    <Route path="/"        element={<StartPage/>}/>
                    <Route path="/start"   element={<StartPage/>}/>
                    <Route path="/game"    element={<GamePage/>}/>
                    <Route path="/results" element={<ResultsPage/>}/>
                </Routes>
            </PlayerProvider>
        </SettingsProvider>
    );
}

export default App
