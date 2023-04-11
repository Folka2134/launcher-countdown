import { useState, useEffect } from "react";

import "./App.css";
import backgroundStars from "./assets/images/bg-stars.svg";
import backgroundHills from "./assets/images/pattern-hills.svg";

function App() {
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const totalSeconds =
        days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
      if (totalSeconds > 0) {
        const remainingSeconds = totalSeconds - 1;
        setDays(Math.floor(remainingSeconds / (24 * 60 * 60)));
        setHours(Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60)));
        setMinutes(Math.floor((remainingSeconds % (60 * 60)) / 60));
        setSeconds(remainingSeconds % 60);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="App h-screen bg-gradient-to-b from-[#191A24] via-[#1E1F29] to-[#343650] flex justify-center font-red-hat">
      {/* <img src={backgroundStars} alt="" /> */}
      <div className="bg-pattern-stars h-full bg-no-repeat w-full absolute "></div>
      <div className="bg-pattern-hill h-48 bg-no-repeat bg-cover w-full bottom-0 absolute"></div>
      <div className="p-6 mt-48 md:mt-72">
        <h1 className="text-3xl text-center text-white uppercase tracking-widest ">
          We're Launching Soon
        </h1>
        <div className="mt-32 flex justify-evenly text-center">
          <div className="flex flex-col w-24">
            <h1 className="text-7xl text-[#FB6087]">{days}</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Days</h6>
          </div>
          <div className="flex flex-col w-24">
            <h1 className="text-7xl text-[#FB6087]">{hours}</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Hours</h6>
          </div>
          <div className="flex flex-col w-24">
            <h1 className="text-7xl text-[#FB6087]">{minutes}</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Minutes</h6>
          </div>
          <div className="flex flex-col w-24">
            <h1 className="text-7xl text-[#FB6087]">{seconds}</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Seconds</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
