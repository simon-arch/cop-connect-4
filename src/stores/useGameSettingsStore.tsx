import { create } from 'zustand'
import type {GameSettings} from "../types/gameSettings.ts";

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

const storageKey = 'game-settings';
const initSettings = (): GameSettings => {
    try {
        const stored = localStorage.getItem(storageKey);
        return stored ? JSON.parse(stored) : defaultSettings;
    } catch (e) {
        console.error('Error occurred while loading data from localStorage', e);
        return defaultSettings;
    }
};

const saveToStorage = (settings: GameSettings) => {
    try {
        localStorage.setItem(storageKey, JSON.stringify(settings));
    } catch (e) {
        console.error('Error occurred while saving data to localStorage', e);
    }
};

const useGameSettingsStore = create<GameSettingsStore>((set) => ({
    settings: initSettings(),
    setSettings: (settings) => {
        saveToStorage(settings);
        set({ settings });
    }
}));

export default useGameSettingsStore;