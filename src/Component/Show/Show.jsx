import React, { useState } from "react";

const Show = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="text-center">
      <div className="mt-10">
        {toggle && (
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            delectus inventore suscipit in necessitatibus ducimus pariatur neque
            nam voluptatum quisquam. Officia excepturi odio aspernatur, sapiente
            magnam nam delectus provident a.
          </article>
        )}
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Show;
