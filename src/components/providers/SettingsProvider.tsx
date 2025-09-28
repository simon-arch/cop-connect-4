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
    winSize: 4
};

const SettingsProvider = ({children}: SettingsProviderProps) => {
    const [settings, setSettings] = useState<GameSettings>(defaultSettings);

    const update = useCallback((settings: GameSettings) => {
        console.log(settings);
    }, [])

    return (
        <SettingsContext.Provider value={{settings, update}}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;