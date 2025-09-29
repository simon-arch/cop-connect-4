import {type ReactNode, useCallback, useState} from "react";
import type {GameSettings} from "../../types/gameSettings.ts";
import {SettingsContext} from "../../hooks/useSettings.tsx";

interface SettingsProviderProps {
    children: ReactNode;
}

const defaultSettings: GameSettings = {
    playAnimations: true,
    gridRows: 6,
    gridCols: 7,
    winSize: 4,
    initialPlayer: "P1",
    playerName1: "PL1",
    playerName2: "PL2"
};

const storageKey = 'game-settings';

const InitSettings = () => {
    try {
        const stored = localStorage.getItem(storageKey);
        return stored ? JSON.parse(stored) : defaultSettings;
    } catch (e) {
        console.error('Error occurred while loading data from localStorage', e);
        return defaultSettings;
    }
}

const SettingsProvider = ({ children }: SettingsProviderProps) => {
    const [settings, setSettings] = useState<GameSettings>(InitSettings());

    const update = useCallback((newSettings: GameSettings) => {
        setSettings(newSettings);
        try {
            localStorage.setItem(storageKey, JSON.stringify(newSettings));
        } catch (e) {
            console.error('Error occurred while saving data to localStorage', e);
        }
    }, []);

    return (
        <SettingsContext.Provider value={{ settings, update }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;