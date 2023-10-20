import { useEffect } from "react";
import "./App.css";
import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";

function App() {
  useEffect(() => {
    const flashlight = document.getElementById("flashlight");
    const mainEle = document.getElementById("main");
    mainEle.addEventListener("mousemove", event => {
      let xLoc = event.clientX;
      let yLoc  = event.clientY;
      console.log(xLoc, yLoc);
      flashlight.style.setProperty("--x", `${xLoc}px`);
      flashlight.style.setProperty("--y", `${yLoc}px`);
      
    })
  },[])

  return (
    <> 
    <div id="flashlight" className="absolute inset-0" style={{background:`radial-gradient(800px circle at var(--x) var(--y), rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
    <main id="main" className="lg:flex lg:justify-between lg:px-10 lg:gap-4  mx-auto max-w-screen-xl relative font-poppins">
      <LeftContainer />
      <RightContainer />
    </main>
    </>
  );
}

export default App;
