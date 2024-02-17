import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.article className='p-8' id='about' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <h1 className='text-2xl font-bold'>About me:</h1>
      <div className='flex flex-col gap-4'>
        <ul>
          <li className='my-2 list-disc'>Hey, I am Ray as mentioned earlier, I am 16 years old and simultaneously attending High School designed for media and advertising while completing College coursework in Manhattan NY.</li>
          <li className='my-2 list-disc'>My journey into coding was at the early age of 14 and instantly got hooked onto it. I transformed my love at the time from video games to coding and when I first heard about building web applications I instantly knew this was what I wanted to do in the future. </li>
          <li className='my-2 list-disc'>At this very moment my dedication for building web applications remains strong. Despite my young age, I still remain driven to learn and improve. </li>
        </ul>
      </div>
    </motion.article>
  )
}