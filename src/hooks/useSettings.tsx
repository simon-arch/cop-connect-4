import {createContext, useContext} from "react";
import type {GameSettings} from "../types/gameSettings.ts";

interface SettingsContextType {
    settings: GameSettings;
    update: (settings: GameSettings) => void;
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === null)
        throw new Error("Settings context is null");

    return context;
}