import {create} from "zustand";
import type {CellOwner} from "@interfaces/cellOwner.ts";
import {useGameSettingsStore} from "@stores/useGameSettingsStore.tsx";

interface PlayerStore {
    player: CellOwner;
    setPlayer: (player: CellOwner) => void;
    nextPlayer: () => void;
}

export const usePlayerStore = create<PlayerStore>((set) => {
    useGameSettingsStore.subscribe(
        (state) => set({ player: state.settings.initialPlayer })
    );

    return {
        player: useGameSettingsStore.getState().settings.initialPlayer,
        setPlayer: (player) => set({ player }),
        nextPlayer: () => set((state) => ({
            player: state.player === 'P1' ? 'P2' : 'P1',
        }))
    };
});