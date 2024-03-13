import { useEffect, useState } from "react";

export const Countdown = ( {timerData} ) => {

    //const timerLength = timerData;
    //const timerLength = (timerData.days * 86400) + (timerData.hours * 3600) + (timerData.minutes * 60) + timerData.seconds;
    const [time, setTime] = useState(timerData);

    useEffect(() => {
        const i = setInterval(() => {
            setTime(t => t - 1)
        }, 1000);
        return () => clearInterval(i);
    }, [])

    return (
        <div>{time}</div>
    )
}
