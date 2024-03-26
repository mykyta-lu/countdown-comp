import { useEffect, useState } from "react";


// need to change function to accept argument from main component
function calculateTimeLeft(month, day, year) {
  
    const difference = +new Date(`${month}/${day}/${year}`) - +new Date();

    let timeLeft = {};
  
    if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
  }

  const Countdown = ({  month=1, day=1, year=new Date().getFullYear() }) => {
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(month, day, year))
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(month, day, year));
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(<span>{timeLeft[interval]} {interval} {"  "}</span>);
    });
  

    return (
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    );
  }

  export default Countdown;
