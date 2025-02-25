import { StopwatchContext } from "./Stopwatch";
import { useContext } from "react";

function Records() {
  const [stopwatch, _, getTime] = useContext(StopwatchContext);

  return (
    <div className="records">
      {stopwatch.records.length > 0 && (
        <ul>
          <li>
            <span>#{stopwatch.records.length + 1}</span>
            <span>{getTime("full")}</span>
            <span>
              {getTime("full", stopwatch.elapsedTime - stopwatch.records[0])}
            </span>
          </li>
          {stopwatch.records.map((time, index) => (
            <li key={index}>
              <span>
                #
                {String(stopwatch.records.length - index).padStart(
                  String(stopwatch.records.length + 1).length,
                  "0"
                )}
              </span>
              <span>{getTime("full", time)}</span>
              <span>
                {getTime("full", time - (stopwatch.records[index + 1] || 0))}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Records;
