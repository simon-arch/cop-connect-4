import { useState, useEffect } from 'react';

const useTimer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
}

export default useTimer;
