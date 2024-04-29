import { useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"
import image1 from "../assets/Recruitment.jpg"




function ImageSlider() {

  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww'

  ]

  const thumbnailLogo = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww'
  ]

  const content = [
    {
      heading: "RECRUITMENT DAY",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, delectus. Voluptate voluptatibus error, cumque, illo praesentium reprehenderit perspiciatis fuga fugit, iure assumenda nemo? Impedit ea suscipit aliquam tempora fugit ab? Eos, accusantium cumque. Quis saepe quasi fuga debitis iusto iure."
    },
    {
      heading: "INAGURATION CEREMONY",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, delectus. Voluptate voluptatibus error, cumque, illo praesentium reprehenderit perspiciatis fuga fugit, iure assumenda nemo? Impedit ea suscipit aliquam tempora fugit ab? Eos, accusantium cumque. Quis saepe quasi fuga debitis iusto iure."
    },
    {
      heading: "TECH TRAILS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, delectus. Voluptate voluptatibus error, cumque, illo praesentium reprehenderit perspiciatis fuga fugit, iure assumenda nemo? Impedit ea suscipit aliquam tempora fugit ab? Eos, accusantium cumque. Quis saepe quasi fuga debitis iusto iure."
    },
  ]

  const [currentActiveImage, setCurrentActiveImage] = useState([true, false, false, false]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const setActive = (index) => {
    const newArray = Array(currentActiveImage.length).fill(false);
    newArray[index] = true;
    setCurrentActiveImage(newArray);
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      setActive(prevIndex == 0 ? images.length - 1 : prevIndex - 1)
      return prevIndex == 0 ? images.length - 1 : prevIndex - 1
    })
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      setActive(prevIndex == images.length - 1 ? 0 : prevIndex + 1)
      return prevIndex == images.length - 1 ? 0 : prevIndex + 1
    })
  }

  const getTranslateX = (index) => {
    return -index * 13.5
  }

  return (
    // SliderBody
    <>
    <h1 id='events' className='text-white text-center text-6xl font-bold'>Events</h1>
      <div className=' w-[80%] h-[90vh] m-auto my-4 relative text-white rounded-2xl'>
        <img className='absolute top-0 left-0 w-full h-full bg-cover rounded-2xl ' src={images[currentImageIndex]} alt="" />
        <div className='absolute top-0 left-0 bg-black/50 z-[9] w-full h-full'>
          {/* mainBody */}
          <div className='h-[90%] flex'>
            {/* contentSection */}
            <div className='w-1/2 p-5 flex flex-col justify-around'>
              <h1 className='text-6xl font-extrabold my-6'>{content[currentImageIndex].heading}</h1>
              <p className='text-3xl  my-4'>{content[currentImageIndex].description}</p>
            </div>
            {/* imageSection */}
            <div className='w-1/2 relative overflow-hidden'>
              {images.map((val, index) => (
                <motion.div
                  key={index}
                  className={`absolute bottom-8 inline-block w-[12vw] rounded-xl bg-white h-[50%]`}
                  style={{
                    left: `${13.5 + 13.5 * index}vw`,
                    background: `url(${thumbnailLogo[index]}) no-repeat center`
                  }}
                  animate={{
                    x: `${getTranslateX(currentImageIndex)}vw`,
                    scale: `${currentActiveImage[index] ? 1.2 : 0.7}`,
                    opacity: `${currentActiveImage[index] ? 1 : 0.7}`
                  }}
                  transition={{ type: 'spring', stiffness: 100 }}></motion.div>))}
            </div>
          </div>
          {/* buttonSection */}
          <div className='text-white flex justify-center items-center gap-10 text-5xl h-[10%]'>
            <div onClick={prevImage} className=' cursor-pointer active:text-gray-200'
              style={{
                pointerEvents: `${currentImageIndex === 0 ? 'none' : 'auto'}`,
                color: `${currentImageIndex != 0 ? '#fff' : 'rgba(127, 130, 133,0.9)'}`
              }}
            ><FaArrowAltCircleLeft /></div>
            <div onClick={nextImage} className=' cursor-pointer active:text-gray-200'
              style={{
                pointerEvents: `${currentImageIndex === images.length - 1 ? 'none' : 'auto'}`,
                color: `${currentImageIndex != images.length - 1 ? '#fff' : 'rgba(127, 130, 133,0.9)'}`
              }}
            ><FaArrowAltCircleRight /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageSlider