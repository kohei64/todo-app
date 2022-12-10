import React from "react";
import { useStopwatch } from "react-timer-hook";

const Timer=() =>{
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div>
      <div>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button
        onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;