import "./App.css";
import Hero from "./components/Hero";
import img from "./assets/nosu.jpg";
import RandomSquare from "./components/RandomSquare";

function App() {
  return (
    <div className="bg-black ">
      <Hero />
      <RandomSquare img={img} />
      <div className="w-full h-[10vw]"></div>
    </div>
  );
}

export default App;
