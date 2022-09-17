import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [hoursTimer, setHoursTimer] = useState("10");
  const [minutesTimer, setMinutesTimer] = useState("10");
  const [secondsTimer, setSecondsTimer] = useState("10");

  let interval;

  const startTimer = () => {
    const countdownDate = new Date("September 09,2023 20:00:00").getTime();

    console.log(Math.floor(countdownDate));
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      console.log(hours);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHoursTimer(hours);
        setMinutesTimer(minutes);
        setSecondsTimer(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <span>{hoursTimer} </span>
      <span>Hours </span>
      <span>{minutesTimer} </span>
      <span>Minutes </span>
      <span>{secondsTimer} </span>
      <span>Seconds</span>
    </div>
  );
}

export default App;
