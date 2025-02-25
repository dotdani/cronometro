import Stopwatch from "./components/Stopwatch";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPause,
  faPlay,
  faRotateRight,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPause, faPlay, faRotateRight, faStopwatch);

function App() {
  return <Stopwatch />;
}

export default App;
