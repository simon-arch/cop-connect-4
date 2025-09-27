import {useState} from "react";
import StartPage from "./pages/StartPage.tsx";
import GamePage from "./pages/GamePage.tsx";
import ResultsPage from "./pages/ResultsPage.tsx";
import type {pageType} from "./types/pageType.ts";
import PlayerProvider from "./components/providers/PlayerProvider.tsx";

function App() {
    const [page, setPage] = useState<pageType>("START");

    return (
        <div>
            {page === "START"   && <StartPage   onStart={()   => setPage("GAME")}   />}
            {page === "GAME" &&
                <PlayerProvider>
                    <GamePage onFinish={()  => setPage("RESULTS")}/>
                </PlayerProvider>}
            {page === "RESULTS" && <ResultsPage onRestart={() => setPage("START")}  />}
        </div>
    )
}

export default App
