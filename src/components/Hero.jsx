import React from 'react'
import Spline from '@splinetool/react-spline';


function Hero({ onLoad }) {
  return (
    <div className='relative overflow-x-hidden top-20 lg:top-0 pointer-events-auto'>
      <Spline onLoad={onLoad} scene="https://prod.spline.design/o8yT4Fx-u9iu114N/scene.splinecode" />
    </div>
  )
}

export default Hero