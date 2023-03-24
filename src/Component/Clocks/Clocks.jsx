import React, { useState } from "react";

const Clocks = () => {
  const preTime =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  const [time, setTime] = useState(preTime.toString());
  const showTime = () => {
    const newTime =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();
    return setTime(newTime.toString());
  };
  setInterval(showTime, 1000);
  console.log(time);
  return (
    <div>
      <h1>Current time: {time}</h1>
    </div>
  );
};

export default Clocks;
