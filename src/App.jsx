import * as React from "react";
import { useEffect, useState } from "react";

const App = () => {

  const [time, setTime] = useState(15);

  useEffect(() => {
    const timerId = setInterval(() => setTime(t => t - 1), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div> {time} </div>;
};

export default App;

