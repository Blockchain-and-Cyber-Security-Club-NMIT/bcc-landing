import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className='bg-black relative'>
      <div className=" fixed top-0 left-0">
      <Spline scene="https://prod.spline.design/MV0Xi4FW1FoKONyI/scene.splinecode" />
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-black/0 pointer-events-none">
        <Navbar />
        <Hero />
        <ImageSlider />
      </div>

    </div>
  );
}

export default App;
