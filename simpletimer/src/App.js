import React from "react";
import "./App.css";
import { useTimer } from "./hooks/useTimer";

function App() {
  const [hour, min, sec, timerState, start, stop, setTimer] = useTimer();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    // setTime((currentTime) => ({
    //   minutes: currentTime.minutes,
    //   seconds: currentTime.seconds,
    //   [name]: value,
    // }));
    setTimer({ hour, min, sec, [name]: +value });
  };

  return (
    <div className="App"> 
      <form>
        <input
          type="number"
          min="0"
          max="23"
          placeholder={hour}
          value={hour}
          name="hour"
          onInput={inputHandler}
          disabled = {timerState ? true : false}
        />
        <input
          type="number"
          min="0"
          max="60"
          placeholder={min}
          value={min}
          name="min"
          onInput={inputHandler}
          disabled = {timerState ? true : false}
        />
        <input
          type="number"
          min="0"
          max="60"
          placeholder={sec}
          value={sec}
          name="sec"
          onInput={inputHandler}
          disabled = {timerState ? true : false}
        />
      </form>
      <button onClick={timerState ? stop : start}>
        {timerState ? "stop" : "start"}
        </button>
    </div>
  );
}

export default App;
