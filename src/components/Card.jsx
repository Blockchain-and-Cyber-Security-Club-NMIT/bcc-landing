import { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";



function Card({ value, index }) {
    const { name, image, description, social } = value;
    const parentVariants = {
        initial: {},
        enter: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
    const cardVariants = {
        initial: { opacity: 0, scale: 0.9, y:20 },
        enter: { opacity: 1, y:0, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, y:20, scale: 0.9, transition: { duration: 0.3 } },
    };

    const heightVariants = {
        short: { height: '300px' },
        expanded: { height: '380px' }
    }

    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial="short"
            animate={isHovered ? 'expanded' : 'short'}
            variants={heightVariants}
            transition={{ duration: 0.4 }}
            className='bg-white/50 backdrop-blur-sm rounded-lg shadow-lg w-[250px] h-[350px] p-6 absolute pointer-events-auto'
            style={{
                top: `${index % 2 == 0 ? 0 : 200}px`,
                left: `${index * 260}px`,
            }}>
            <img
                src={image}
                alt="Card Image"
                className="w-full h-[14vw] rounded-lg"
            />
            <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">{name}</h2>
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            variants={parentVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit">
                            <motion.p variants={cardVariants} className="">{description}</motion.p>
                            <div className="flex gap-4 text-xl justify-center mt-4">
                                <motion.a variants={cardVariants}  href={social[0]}>
                                    <FaFacebook />
                                </motion.a>
                                <motion.a variants={cardVariants} href={social[1]}>
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a variants={cardVariants} href={social[2]}>
                                    <IoMail />
                                </motion.a>
                            </div>
                        </motion.div>)}

                </AnimatePresence>
            </div>
        </motion.div>


    )
}

export default Card