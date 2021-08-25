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

  return (
    <div
      className="App"
      class="uk-background-secondary uk-light uk-padding uk-panel"
    >
    <div
    class="uk-flex uk-flex-center"
    >
      <form>
        <input
          class="uk-input uk-form-width-small uk-text-center"
          type="number"
          min="0"
          max="23"
          placeholder={hour}
          value={hour}
          name="hour"
          onInput={inputHandler}
          disabled={timerState ? true : false}
        />
        <input
          class="uk-input uk-form-width-small uk-text-center uk-margin-left"
          type="number"
          min="0"
          max="60"
          placeholder={min}
          value={min}
          name="min"
          onInput={inputHandler}
          disabled={timerState ? true : false}
        />
        <input
          class="uk-input uk-form-width-small uk-text-center uk-margin-left"
          type="number"
          min="0"
          max="60"
          placeholder={sec}
          value={sec}
          name="sec"
          onInput={inputHandler}
          disabled={timerState ? true : false}
        />
      </form>
      </div>
      <p></p>
      <div
      class = "uk-flex uk-flex-center"
      >
      <button
        class="uk-button uk-button-default"
        onClick={timerState ? stop : start}
      >
        {timerState ? "stop" : "start"}
      </button>
      </div>
    </div>
  );
}

export default App;
