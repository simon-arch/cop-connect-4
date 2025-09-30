import {create} from 'zustand'
import type {GameSettings} from "../types/gameSettings.ts";
import {persist} from "zustand/middleware";

interface GameSettingsStore {
    settings: GameSettings;
    setSettings: (settings: GameSettings) => void;
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

const useGameSettingsStore = create<GameSettingsStore>()(
    persist(
        (set) => ({
            settings: defaultSettings,
            setSettings: (settings: GameSettings) => set({ settings }),
        }),
        {name: 'game-settings'}
    )
);

export default useGameSettingsStore;