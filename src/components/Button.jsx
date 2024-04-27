import React from 'react'
import { motion } from "framer-motion"

function Button({ content , addr }) {
    return (
        <motion.div className=' text-4xl xl:text-5xl my-10 xl:my-[2.5vw] font-bold text-white overflow-hidden h-10 xl:h-[3vw] relative hover:border-b-2'>
            <a href={addr}>
            <motion.div className='absolute w-full ' whileHover={{ y: "-50%", }} transition={{duration:0.3}}>
            <h1 className=' cursor-pointer'>{content}</h1>
            <h1 className=' cursor-pointer'>{content}</h1>
            </motion.div>
            </a>
        </motion.div>
    )
}

export default Button

