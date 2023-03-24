import React, { useState } from "react";

const LoginControl = () => {
  const [isLoogedIn, setIsLoggedIn] = useState(false);
  const handaleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handaleLogOutClick = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default LoginControl;
