import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Articles from "./Component/Articles/Articles";
import Footer from "./Component/Footer/Footer";
import Battery from "./Component/Battery/Battery";
import Clock from "./Component/Clock/Clock";
import Show from "./Component/Show/Show";
import Watch from "./Component/Watch/Watch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header />
      <Articles />
      <Footer />
      <Battery />
      <Clock /> */}
      <Show />
      <Watch />
    </div>
  );
}

export default App;
