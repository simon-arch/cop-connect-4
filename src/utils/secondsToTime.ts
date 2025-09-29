import type {date} from "../types/date.ts";

export default function secondsToTime(total: number): date {
    const days = Math.floor(total / (24 * 60 * 60));
    const hours = Math.floor((total % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    return {
        days,
        hours,
        minutes,
        seconds,
    };
}