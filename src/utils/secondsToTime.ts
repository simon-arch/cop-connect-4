import type { date } from '@contracts/date.ts';

/**
 * Converts a duration in seconds into a breakdown of days, hours, minutes, and seconds.
 * @param total - The total duration in seconds to be converted.
 * @returns An object of type {@link date} containing the partitioned time units.
 * @example
 * ```tsx
 * const time = secondsToTime(90);
 * ```
 * @category Utilities
 */
export function secondsToTime(total: number): date {
	const days = Math.floor(total / (24 * 60 * 60));
	const hours = Math.floor((total % (24 * 60 * 60)) / 3600);
	const minutes = Math.floor((total % 3600) / 60);
	const seconds = Math.floor(total % 60);

	return {
		days,
		hours,
		minutes,
		seconds,
	};
}
