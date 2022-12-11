import { useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";
import { addTime } from "../features/timerSlice";

const Timer=() =>{
  const dispatch = useDispatch();
  const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
  const doneTime=()=>{
    const time:number=Number(hours)*3600+Number(minutes)*60+Number(seconds)
    dispatch(addTime(time))
  }

  return (
    <div>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button
        onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}
      >
        Reset
      </button>
      <button onClick={doneTime}>
        完了
      </button>
    </div>
  );
}

export default Timer;