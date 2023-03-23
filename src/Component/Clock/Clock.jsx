import React, { useState } from "react";

// update current time time
const Clock = () => {
  const [time, setTime] = useState(new Date().toString());
  const showDate = () => {
    setTime(new Date().toString());
  };
  setInterval(showDate, 1000);
  return <div>{time}</div>;
};

export default Clock;
