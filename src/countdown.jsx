import { useEffect, useState } from "react";


// need to change function to accept argument from main component
function calculateTimeLeft() {
    let year = new Date().getFullYear();
  
    const difference = +new Date(`10/01/${year}`) - +new Date();
  
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

  const Countdown = () => {
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
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
