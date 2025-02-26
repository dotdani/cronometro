import Controls from "./StopwatchControls";
import Records from "./StopwatchRecords";
import Time from "./StopwatchTime";
import { createContext, useEffect, useRef, useState } from "react";

export const StopwatchContext = createContext();

function Stopwatch() {
  const intervalIdRef = useRef();
  const [stopwatch, setStopwatch] = useState({
    isRunning: false,
    startTime: 0,
    elapsedTime: 0,
    records: [],
  });

  const getTime = (format, value = null) => {
    let time = value || stopwatch.elapsedTime;
    let temp = null;
    let result = [];

    if (format === "full" || format === "hours") {
      temp = Math.floor(time / (1000 * 60 * 60));
      result.push(String(temp).padStart(2, "0"));
    }

    if (format === "full" || format === "minutes") {
      temp = Math.floor((time / (1000 * 60)) % 60);
      result.push(String(temp).padStart(2, "0"));
    }

    if (format === "full" || format === "seconds") {
      temp = Math.floor((time / 1000) % 60);
      result.push(String(temp).padStart(2, "0"));
    }

    if (format === "full" || format === "miliseconds") {
      temp = Math.floor((time % 1000) / 10);
      result.push(String(temp).padStart(2, "0"));
    }

    if (format === "full" && stopwatch.elapsedTime < 60 * 60 * 1000) {
      result.shift();
    }

    return result.join(":");
  };

  useEffect(() => {
    if (stopwatch.isRunning) {
      intervalIdRef.current = setInterval(() => {
        setStopwatch((s) => ({
          ...s,
          elapsedTime: Date.now() - s.startTime,
        }));
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [stopwatch.isRunning]);

  return (
    <div className="stopwatch">
      <StopwatchContext value={[stopwatch, setStopwatch, getTime]}>
        <Time />
        <Records />
        <Controls />
      </StopwatchContext>
    </div>
  );
}

export default Stopwatch;
