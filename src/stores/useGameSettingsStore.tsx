import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameSettings } from '@interfaces/gameSettings.ts';

interface GameSettingsStore {
	settings: GameSettings;
	setSettings: (settings: GameSettings) => void;
}

const defaultSettings: GameSettings = {
	playAnimations: true,
	gridRows: 6,
	gridCols: 7,
	winSize: 4,
	initialPlayer: 'P1',
	playerName1: 'PL1',
	playerName2: 'PL2',
};

export const useGameSettingsStore = create<GameSettingsStore>()(
	persist(
		(set) => ({
			settings: defaultSettings,
			setSettings: (settings: GameSettings) => set({ settings }),
		}),
		{ name: 'game-settings' },
	),
);
