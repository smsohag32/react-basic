import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Articles from "./Component/Articles/Articles";
import Footer from "./Component/Footer/Footer";
import Battery from "./Component/Battery/Battery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header />
      <Articles />
      <Footer />
      <Battery /> */}
    </div>
  );
}

export default App;
