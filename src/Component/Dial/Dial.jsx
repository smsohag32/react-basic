import React from "react";
import Clocks from "../Clocks/Clocks";

const Dial = (props) => {
  console.log(props);
  return (
    <div className="text-center">
      <h2>
        inside dial component : <span className="text-2xl">{props.count}</span>
      </h2>
    </div>
  );
};

export default Dial;
