import React from 'react'
import { motion } from 'framer-motion'


export default function Greeting() {
  return (
    <motion.section className='flex items-center justify-between p-8 flex-wrap gap-4' id='greeting' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <article className='flex flex-col gap-2'>
        <p className='font-medium'>👋 Hello, I am...</p>
        <h1 className='text-6xl font-extrabold text-white min-h-[90px] flex items-center bg-blue-500 p-1.5 drop-shadow-md'>Ray Chu.</h1>
        <h2 className='text-2xl font-bold'>Front End Developer</h2>
        <a href="#projects" className='cursor-pointer text-1xl text-blue-500 font-medium hover:text-blue-600 w-fit'>See Projects</a>
      </article>
      <img src="./assets/pfp.jpg" alt='profile' width="225" className='rounded-full drop-shadow-md'/>
    </motion.section>
  )
}
