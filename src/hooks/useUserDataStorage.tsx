import {useEffect, useState} from 'react';
import type {UserData} from "../types/userData.ts";

//TODO: expand with appending data to an existing user
export const useUserDataStorage = (nickname?: string) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        if (!nickname) return;

        const stored = localStorage.getItem('user-data');
        if (stored) {
            try {
                const users: UserData[] = JSON.parse(stored);
                const user = users.find(u => u.nickname === nickname);
                if (user) {
                    setUserData(user);
                } else {
                    console.warn(`User "${nickname}" not found`);
                    setUserData(null);
                }
            } catch (e) {
                console.error('Error occurred while loading data from localStorage', e);
                setUserData(null);
            }
        } else {
            setUserData(null);
        }
    }, [nickname]);

    return userData;
};
