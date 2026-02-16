import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameSettings } from '@contracts/gameSettings.ts';

/**
 * Defines the state and actions available in the Game Settings Store.
 * @category Interfaces
 * */
export interface GameSettingsStore {
	/** The current configuration object for the game session. */
	settings: GameSettings;

	/** Updates the global settings with a new configuration object. */
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

/**
 * A persisted hook-based store for managing game configurations.
 * @remarks This store utilizes Zustand's `persist` middleware to automatically
 * sync the state with `localStorage` under the key `'game-settings'`.
 * @example
 * ```tsx
 * const { settings, setSettings } = useGameSettingsStore();
 * // Update player name
 * setSettings({ ...settings, playerName1: 'John' });
 * ```
 * @category Stores
 */
export const useGameSettingsStore = create<GameSettingsStore>()(
	persist(
		(set) => ({
			settings: defaultSettings,
			setSettings: (settings: GameSettings) => set({ settings }),
		}),
		{ name: 'game-settings' },
	),
);
