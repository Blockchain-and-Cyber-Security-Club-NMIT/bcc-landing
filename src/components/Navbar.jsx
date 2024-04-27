import React, { useState } from 'react'
import { motion } from "framer-motion"
import Button from './Button'
import logo from '../assets/Club_logo.png'

function Navbar() {
  const [active, setActive] = useState(false)

  
  return (
    <nav className='text-white py-1 mt-1 w-full fixed  bg-transparent z-10  px-2 h-14 pointer-events-none'> 
      <img className=' h-full absolute top-4 left-10 scale-[2]' src={logo} alt="club_logo" />
      <motion.button
       onClick={()=> setActive((pev)=> !pev)}
       animate = {active ? "open" : "close"}
       className='absolute right-2 z-[11] h-full w-14 lg:w-[4.5vw] pointer-events-auto '>
        <motion.span
          style={{
            top: "30%",
            left: "50%",
            x: "-50%",
            y: "-50%"

          }}
          variants={{
            open:{
              rotate: "45deg",
              top: "50%"
            },
            close: {
              rotate: "0deg"
            }
          }}
          className='absolute h-1 w-[70%] bg-white ' />
        <motion.span
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%"

          }}
          variants={{
            open:{
              x: "100%"
            },
            close: {
              x:"-50%"
            }
          }}
           className='absolute h-1 w-[70%] bg-white ' />
        <motion.span
          style={{
            top: "70%",
            left: "50%",
            x: "-50%",
            y: "-50%"

          }}
          variants={{
            open:{
              rotate: "-45deg",
              top: "50%"
            },
            close: {
              rotate: "0deg"
            }
          }}
          className='absolute h-1 w-[70%] bg-white ' />
      </motion.button>

      <motion.div
       style={{
        x:"150%"
       }}
      animate ={{
        x : active?"0%":"150%"
      }}
      transition={{ type: "spring" , duration:0.7 }}

      className=' h-[100vh] rounded-xl bg-zinc-400/30 backdrop-blur-sm  w-2/3 lg:w-1/3 absolute top-0 z-10 right-0 px-[3vw] py-[4vw] pointer-events-auto '>
        <Button content={"About Us"}/>
        <Button content={"Events"} addr = {"#events"}/>
        <Button content={"Our Team"}/>
        <Button content={"Contact Us"}/>
      </motion.div>

    </nav>
  )
}

export default Navbar