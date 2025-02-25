import { StopwatchContext } from "./Stopwatch";
import { useContext } from "react";

function Time() {
  const [stopwatch, __, getTime] = useContext(StopwatchContext);

  return (
    <div className="time">
      <div>
        <div>
          {stopwatch.elapsedTime > 60 * 60 * 1000 && (
            <span className="hours">{getTime("hours")}:</span>
          )}
          {stopwatch.elapsedTime > 60 * 1000 && (
            <span className="minutes">{getTime("minutes")}:</span>
          )}
          <span className="seconds">{getTime("seconds")}</span>
        </div>
        <div>
          <span className="miliseconds">{getTime("miliseconds")}</span>
        </div>
      </div>
    </div>
  );
}

export default Time;
