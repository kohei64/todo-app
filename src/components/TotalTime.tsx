import { useSelector } from "react-redux";


const TotalTime = () => {
  const times = useSelector((state: any) => state.timer);
  const hours=Math.floor(times/3600);
  const minutes=Math.floor((times-(hours*3600))/60)
  const seconds=Math.floor((times-(hours*3600+minutes*60)))
  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  )
}

export default TotalTime