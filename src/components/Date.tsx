import moment from "moment";
import { useState } from "react";

// 残り時間
const remainDay = (targetDate:string,today:string) => {
  for (let d = 1; d < 4; d++) {
    const remain = moment(targetDate).subtract(d, "d").format("YYYY-MM-DD");
    if (remain === today) {
      return d;
    }
  }
};
const Date = () => {
  const [targetDate, setTargetDate] = useState("");

  // 今日の日付
  const today = moment().format("YYYY-MM-DD");

  // 目標日付
  const day = moment(targetDate);
  const dayFormat = day.format("YYYY-MM-DD");
  console.log(dayFormat, today, remainDay);

  const remain=remainDay(targetDate,today)

  return (
    <div className="">
      <input
        type="date"
        onChange={(e) => setTargetDate(e.target.value)}
        className="text-black"
      />
      {remain}
    </div>
  );
};

export default Date;
