import React from "react";

const Comments = (props) => {
  console.log(props);
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <p className="my-6">{props.name}</p>
            <p className="text-center">{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
