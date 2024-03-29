import { useEffect, useState } from "react";


// accept values month day and year
// calculate difference between accepted date and current
// return object with corresponding to each timeline values
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


  // main component
  const Countdown = ({  month=1, day=1, year=new Date().getFullYear() }) => {
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(month, day, year))
    
    // start timer, recalculate each second
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(month, day, year));
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    // variable to hold formated values
    const timerComponents = [];
  

    // check if time conatiner has value for specific interval of time
    // if success return formated elemtent
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(<div><span className="font-bold text-2xl">{timeLeft[interval]}</span> <span>{interval}</span></div>);
    });
  

    return (
      <div className="mx-auto mt-2 flex justify-center gap-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    );
  }

  export default Countdown;
