import "./App.css";
import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";

function App() {
  return (
    <main className="lg:flex lg:justify-between lg:px-20 md:px-10 sm:px-5 lg:gap-4  mx-auto max-w-screen-xl relative font-poppins ">
      <LeftContainer />
      <RightContainer />
    </main>
  );
}

export default App;
