import {WelcomePage} from "./pages/Welcome/WelcomePage.tsx";
import {StartPage} from "./pages/Start/StartPage.tsx";
import {GamePage} from "./pages/Game/GamePage.tsx";
import {ResultsPage} from "./pages/Results/ResultsPage.tsx";
import {ScorePage} from "./pages/Score/ScorePage.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/start" element={<StartPage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="/results" element={<ResultsPage/>}/>
            <Route path="/score/:nickname" element={<ScorePage/>}/>
        </Routes>
    );
}

export default App
