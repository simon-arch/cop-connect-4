import {createContext, useContext} from "react";
import type {CellOwner} from "../types/cellOwner.ts";

interface PlayerContextType {
    next: () => void
    player: CellOwner
}

export const PlayerContext = createContext<PlayerContextType | null>(null)

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (context === null)
        throw new Error("Player context is null");

    return context;
}