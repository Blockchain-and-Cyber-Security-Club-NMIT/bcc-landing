import "./App.css";
import Hero from "./components/Hero";
import img from "./assets/nosu.jpg";
import RandomSquare from "./components/RandomSquare";

function App() {
  return (
    <div className='bg-black '>
      <Navbar />
      <RandomSquare img={img} />
      <Hero />
    </div>
  );
}

export default App;
