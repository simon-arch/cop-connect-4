import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserData } from '@contracts/userData.ts';

/**
 * Defines the state and actions for managing player statistics.
 * @category Interfaces
 * */
export interface UserDataStore {
	/** An array of all player records stored locally. */
	userData: UserData[];

	/**
	 * Updates an existing user's records or adds a new user if the nickname is unique.
	 * @param user - The player data object to be saved.
	 */
	upsertUser: (user: UserData) => void;
}

/**
 * A persisted store that tracks player history, including wins, total games, and playtime.
 * @remarks Data is saved to `localStorage` under the key `'user-data'`,
 * allowing the leaderboard to persist across different browser sessions.\
 * The store uses the `nickname` as a primary key to determine
 * whether to overwrite an existing entry or append a new one.
 * @example
 * const { userData, upsertUser } = useUserDataStore();
 * upsertUser({
 *    nickname: 'John',
 *    wins: userData.find(u => u.nickname === 'John')?.wins || 0,
 *    games: 10,
 *    playtime: 3600
 * });
 * @category Stores
 */
export const useUserDataStore = create<UserDataStore>()(
	persist(
		(set) => ({
			userData: [],
			upsertUser: (user) =>
				set((state) => {
					const existingIndex = state.userData.findIndex(
						(u) => u.nickname === user.nickname,
					);

					if (existingIndex !== -1) {
						const updatedUserData = [...state.userData];
						updatedUserData[existingIndex] = user;
						return { userData: updatedUserData };
					}

					return { userData: [...state.userData, user] };
				}),
		}),
		{ name: 'user-data' },
	),
);
