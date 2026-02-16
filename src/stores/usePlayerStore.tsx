import { create } from 'zustand';
import type { CellOwner } from '@contracts/cellOwner.ts';
import { useGameSettingsStore } from '@stores/useGameSettingsStore.tsx';

/**
 * Defines the state and actions for managing the active player's turn.
 * @category Interfaces
 * */
export interface PlayerStore {
	/** The player who is currently allowed to make a move. */
	player: CellOwner;

	/**
	 * Overrides the current active player.
	 * @param player - The player object to be set.
	 */
	setPlayer: (player: CellOwner) => void;

	/** Switch the active turn to the opposing player. */
	nextPlayer: () => void;
}

/**
 * A reactive store that tracks whose turn it is during the game.
 * @remarks This store subscribes to {@link useGameSettingsStore}.\
 * If the `initialPlayer` setting is updated, the store sets the current
 * player to match the new setting.
 * @example
 * ```tsx
 * const { player, nextPlayer } = usePlayerStore();
 * nextPlayer(); // If player was 'P1', they are now 'P2'
 * ```
 * @category Stores
 */
export const usePlayerStore = create<PlayerStore>((set) => {
	useGameSettingsStore.subscribe((state) =>
		set({ player: state.settings.initialPlayer }),
	);

	return {
		player: useGameSettingsStore.getState().settings.initialPlayer,
		setPlayer: (player) => set({ player }),
		nextPlayer: () =>
			set((state) => ({
				player: state.player === 'P1' ? 'P2' : 'P1',
			})),
	};
});
