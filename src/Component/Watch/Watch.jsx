import React, { useState } from "react";
import Clocks from "../Clocks/Clocks";
import Dial from "../Dial/Dial";

const Watch = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p>Count Step : {count} </p>
      </div>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
      <Dial count={count} />
      <Clocks></Clocks>
    </div>
  );
};

export default Watch;
