import React from 'react'
import { motion as Motion } from 'framer-motion'
import { assets } from '../../src/assets/assets.js'

const Hero = () => {
  return (
  <Motion.div
      initial={{opacity: 0, y:50}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      viewport={{once:true}}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100'
      >
  <div className='container mx-auto px-6 flex-col md:flex-row flex items-center justify-between'>

    {/* Left side content */}

            <div className='md:w-1/2 mb-10 md:mb-0'>

            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                Hi, I'm <span className='text-blue-500'>Avirup Sarkar</span>
            </h1>

            <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
                Frontend Developer
            </h2>

            <p className='text-lg text-gray-300 mb-8'>I create stunning and responsive web applications using the latest technologies.</p>

      <div className='flex space-x-4'>
        <a href="#projects" className='px-6 py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-700 transition duration-300'>View Work</a>
        <a href="#contact" className='px-6 py-3 border border-blue-500 rounded-lg font-medium hover:bg-blue-300 transition duration-300'>Contact Me</a>


            </div>

            </div>

            {/* Right side image */}

            <div className='md:w-1/2 flex justify-center'>
             <div className='relative w-64 h-64 md:w-80 md:h-80'>
                <div className='absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-violet-500  opacity-70'>

                  <Motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType:'loop', ease: 'easeInOut' }}
                  className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                   src={assets.profileImg} alt="Avirup Sarkar Profile"/>
                    

                </div>

             </div>

            </div>

            </div>
      
  </Motion.div>
  )
}

export default Hero
