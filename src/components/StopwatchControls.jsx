import Button from "./StopwatchControlsButton";
import { StopwatchContext } from "./Stopwatch";
import { useContext } from "react";

function Controls() {
  const [stopwatch, setStopwatch] = useContext(StopwatchContext);

  const reset = () => {
    setStopwatch({
      isRunning: false,
      startTime: 0,
      elapsedTime: 0,
      records: [],
    });
  };

  const start = () => {
    setStopwatch((s) => ({
      ...s,
      isRunning: s.isRunning ? false : true,
      startTime: Date.now() - s.elapsedTime,
    }));
  };

  const record = () => {
    setStopwatch((s) => ({
      ...s,
      records: [stopwatch.elapsedTime, ...s.records],
    }));
  };

  return (
    <div className="controls">
      <Button
        icon="rotate-right"
        size="small"
        shape="round"
        title="Reiniciar"
        onClick={reset}
        disabled={!stopwatch.isRunning}
      ></Button>

      <Button
        icon={stopwatch.isRunning ? "pause" : "play"}
        size="large"
        shape={stopwatch.isRunning ? "" : "round"}
        title={stopwatch.isRunning ? "Pausar" : "Iniciar"}
        onClick={start}
      ></Button>

      <Button
        icon="stopwatch"
        size="small"
        shape="round"
        title="Grabar"
        onClick={record}
        disabled={!stopwatch.isRunning}
      ></Button>
    </div>
  );
}

export default Controls;
