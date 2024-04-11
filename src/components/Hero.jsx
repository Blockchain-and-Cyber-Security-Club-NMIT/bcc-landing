import React from 'react'
import Spline from '@splinetool/react-spline';


function Hero() {
  return (
    <div className='relative overflow-x-hidden'>
      {/* <h1 className='absolute text-white text-[7vw] top-[5%] left-[35%] pointer-events-none'>BlockChain</h1>
      <div className='absolute w-full px-[15vw] left-[4%] text-[7vw] top-[35%] flex justify-between pointer-events-none'>
        <h1 className='text-white'>Cyber</h1>
        <h1 className='text-white'>Security</h1>
      </div> */}
      <Spline scene="https://prod.spline.design/o8yT4Fx-u9iu114N/scene.splinecode" />
    </div>
  )
}

export default Hero