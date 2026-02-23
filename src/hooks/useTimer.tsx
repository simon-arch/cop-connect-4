import { useState, useEffect, useRef } from 'react';

/**
 * A hook that manages a numerical stopwatch timer.
 * @remarks Automatically starts a timer when the component mounts and
 * ensures the interval is cleared when the component unmounts.
 * @returns An object containing:
 * - `seconds`: The current time elapsed in seconds.
 * - `stopTimer`: A function to stop the timer.
 * @example
 * ```tsx
 * const { seconds, stopTimer } = useTimer();
 * if (gameEnded) {
 *     stopTimer();
 * }
 * ```
 * @category Hooks
 */
export const useTimer = () => {
	const [seconds, setSeconds] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		startTimer();
		return () => stopTimer();
	}, []);

	const startTimer = () => {
		if (intervalRef.current !== null) return;
		intervalRef.current = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);
	};

	const stopTimer = () => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	return { seconds, stopTimer };
};