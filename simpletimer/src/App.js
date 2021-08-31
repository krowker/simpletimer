import React from "react";
import "./App.css";
import { useTimer } from "./hooks/useTimer";
import "uikit/dist/css/uikit.min.css";

function App() {
  const [hour, min, sec, timerState, start, stop, setTimer] = useTimer();
  
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setTimer({ hour, min, sec, [name]: +value });
  };

  const incHandler = (field, value) => {
    setTimer({ hour, min, sec, [field]: +value+1 });
  };

  const decHandler = (field, value) => {
    setTimer({ hour, min, sec, [field]: +value-1 });
  };

  return (
    <div
      className="App 
      uk-background-secondary 
      uk-light 
      uk-padding       
      uk-height-viewport      
      uk-flex
      uk-flex-column
      uk-flex-center"
    >
      <div
        className="timer-controls
        uk-grid-small
        uk-text-center 
        uk-child-width-1-3
        uk-flex
        uk-flex-center"
        uk-grid="true"
      >
        <div
          className="uk-width-1-6@m
          uk-width-1-3"
        >
          <input
            className="uk-input   
            uk-text-center"
            type="number"
            min="0"
            max="23"
            placeholder={hour}
            value={hour}
            name="hour"
            onInput={inputHandler}
            disabled={timerState ? true : false}
          />
        </div>
        <div
          className="uk-width-1-6@m
          uk-width-1-3"
        >
          <input
            className="uk-input
            uk-text-center 
            "
            type="number"
            min="0"
            max="60"
            placeholder={min}
            value={min}
            name="min"
            onInput={inputHandler}
            disabled={timerState ? true : false}
          />
        </div>
        <div
          className="uk-width-1-6@m
          uk-width-1-3"
        >
          <input
            className="uk-input 
            uk-text-center"
            type="number"
            min="0"
            max="60"
            placeholder={sec}
            value={sec}
            name="sec"
            onInput={inputHandler}
            disabled={timerState ? true : false}
          />
        </div>
      </div>
      <div className="config-buttons        
        uk-grid-small
        uk-text-center 
        uk-child-width-1-6@m
        uk-flex
        uk-flex-center"
        uk-grid="true"
        >
        <div className="
        uk-child-width-1-2"
        >
          <button className="
          uk-button
          uk-button-default
          uk-button-small"
          onClick={()=>decHandler("hour", hour)}
          >-</button>
          <button className="
          uk-button
          uk-button-default
          uk-button-small"
          onClick={()=>incHandler("hour", hour)}
          >+</button>
        </div>
        <div className="
        uk-child-width-1-2">
          <button className="
          uk-button
          uk-button-default
          uk-button-small"
          onClick={()=>decHandler("min", min)}
          >-</button>
          <button className="
          uk-button
          uk-button-default
          uk-button-small"
          onClick={()=>incHandler("min", min)}
          >+</button>
        </div>
        <div className="
        uk-child-width-1-2">
          <button className="
          uk-button
          uk-button-default
          uk-button-small"
          onClick={()=>decHandler("sec", sec)}
          >-</button>
          <button className="
          uk-button
          uk-button-default
          uk-button-small"
          onClick={()=>incHandler("sec", sec)}
          >+</button>
        </div>
      </div>
      <div className="uk-margin
      uk-flex
      uk-flex-center">
        <button
          className="uk-button uk-button-default"
          onClick={timerState ? stop : start}
        >
          {timerState ? "stop" : "start"}
        </button>
      </div>
    </div>
  );
}

export default App;
