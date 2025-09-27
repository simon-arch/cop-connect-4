import {type ReactNode, useCallback, useState} from "react";
import {PlayerContext} from "../../hooks/usePlayer.tsx";
import type {CellOwner} from "../../types/cellOwner.ts";
import {initialPlayer} from "../../constants.ts";

interface PlayerProviderProps {
    children: ReactNode;
}

const PlayerProvider = ({children}: PlayerProviderProps) => {
    const [player, setPlayer] = useState<CellOwner>(initialPlayer);

    const next = useCallback(() => {
        setPlayer(prev => (prev === "P1" ? "P2" : "P1"));
    }, [])

    return (
        <PlayerContext.Provider value={{next, player}}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;