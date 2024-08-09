import React, { useEffect, useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");
  const [timeLeft, setTimeLeft] = useState(7);

  useEffect(() => {
    let timer;

    const cycleLights = () => {
      if (activeLight === "red") {
        setActiveLight("green");
        setTimeLeft(5);
        timer = setTimeout(cycleLights, 5000);
      } else if (activeLight === "green") {
        setActiveLight("yellow");
        setTimeLeft(3);
        timer = setTimeout(cycleLights, 3000);
      } else if (activeLight === "yellow") {
        setActiveLight("red");
        setTimeLeft(7);
        timer = setTimeout(cycleLights, 7000);
      }
    };

    timer = setTimeout(cycleLights, timeLeft * 1000);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [activeLight, timeLeft]);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`}
      ></div>
      <div className="time-left">{timeLeft} seconds left</div>
    </div>
  );
};

export default TrafficLight;
