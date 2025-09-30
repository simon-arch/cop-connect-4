import {create} from "zustand";
import {persist} from "zustand/middleware";
import type {UserData} from "../types/userData.ts";

interface UserDataStore {
    userData: UserData[];
    upsertUser: (user: UserData) => void;
}

const useUserDataStore = create<UserDataStore>()(
    persist(
        (set) => ({
            userData: [],
            upsertUser: (user) =>
                set((state) => {
                    const existingIndex = state.userData.findIndex(
                        (u) => u.nickname === user.nickname
                    );

                    if (existingIndex !== -1) {
                        const updatedUserData = [...state.userData];
                        updatedUserData[existingIndex] = user;
                        return { userData: updatedUserData };
                    }

                    return { userData: [...state.userData, user] };
                }),
        }),
        { name: "user-data" }
    )
);

export default useUserDataStore;