import { useEffect, useState } from "react";

export const Countdown = ( {days = 0, hours = 0, minutes = 0, seconds = 0, event = "my event"} ) => {

    const timerLength = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
    
    const [time, setTime] = useState(timerLength);

    useEffect(() => {
        const i = setInterval(() => {
            setTime(t => Math.max(0, t - 1))
        }, 1000);
        return () => clearInterval(i);
    }, [])

    return (
        <div>
            <div>Countdown to {event}:</div>
            <div>
                <div>{Number.parseInt(time / 86400)}</div>
                <span>days</span>
            </div>
            <div>
                <div>{Number.parseInt(time / 3600)}</div>
                <span>hours</span>
            </div>
            <div>
                <div>{Number.parseInt(time / 60)}</div>
                <span>minutes</span>
            </div>
            <div>
                <div>{((time % 86400) % 3600) % 60}</div>
                <span>seconds</span>
            </div>
        </div>
    )
}
