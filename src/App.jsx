import "./App.css";
import React, { useState, useEffect } from 'react';
import { ClipLoader, HashLoader } from 'react-spinners';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Spline from '@splinetool/react-spline';
import Faculty from "./components/Faculty";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial state is loading
  let [color, setColor] = useState("#ffffff");


  const handleLoad = () => {
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
    
  }

  return (
    <div className='bg-black relative'>
      {isLoading && (
        <div className="flex w-full h-[100vh] justify-center items-center">
          <HashLoader
            color={color}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="relative w-full h-full">
        <div className=" fixed top-0 left-0">
          <Spline scene="https://prod.spline.design/MV0Xi4FW1FoKONyI/scene.splinecode" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 z-10 bg-black/0 pointer-events-none">
          <Navbar />
          <Hero onLoad={handleLoad} />
          <ImageSlider />
          <Faculty />
        </div>
      </div>

    </div>
  );
}

export default App;
