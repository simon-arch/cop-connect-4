import { useState, useEffect, useRef } from 'react';

export const useTimer = () => {
	const [seconds, setSeconds] = useState(0);
	const intervalRef = useRef<number | null>(null);

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
