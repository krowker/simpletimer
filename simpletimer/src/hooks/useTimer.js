import { useState, useEffect, useRef, useMemo } from "react";
import { getHours, getMinutes, getSeconds } from "../helpers/time";

export const useTimer = (time= 1500) => {
  const [counter, setCounter] = useState(time);
  const [isTimerRun, setIsTimerRun] = useState(false);
  const timer = useRef(null);

  const setTimer=({hour,min,sec})=>{
    const time = +hour*3600+ +min*60+ +sec
    setCounter(time)
  }

  const startTimer = () => {
    setIsTimerRun(true);
  };
  const stopTimer = () => {
    setIsTimerRun(false);
  };

  useEffect(() => {
    if (isTimerRun) {
      timer.current = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [isTimerRun]);

  useEffect(() => {
    if (counter <= 0) {
      clearInterval(timer.current);
    }
  }, [counter]);

  const hours = useMemo(() => getHours(counter), [counter]);

  const minutes = useMemo(() => getMinutes(counter), [counter]);

  const seconds = useMemo(() => getSeconds(counter), [counter]);

  return [hours, minutes, seconds, isTimerRun, startTimer, stopTimer, setTimer];
};
