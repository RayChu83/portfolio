import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.article className='p-8' id='about' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <h1 className='text-2xl font-bold'>About me:</h1>
      <div className='flex flex-col gap-4'>
        <ul>
          <li className='my-2 list-disc'>Hey, I am Ray as mentioned earlier, I am an aspiring Front-End developer who is passionate about crafting exceptional web applications through a deep understanding of web technologies and design. </li>
          <li className='my-2 list-disc'>During my past few years, I've built many web applications from start to finish, expanding my expertise and experience with many in demand web technologies such as React and its diverse ecosystem of technologies. I've also delved deep into the fundamentals of media and design through my schools CTE (Career and Technical Education) program. Eventually this led up with being a <a href="https://www.credly.com/badges/485eefba-1b3b-4b1b-b83c-71c67ea85832/"  className='cursor-pointer text-blue-500 hover:text-blue-600 w-fit' target='_blank' rel="noreferrer">certified professional in Visual Design using Adobe Photoshop</a> and having a great sense of design.</li>
          <li className='my-2 list-disc'>At this very moment my dedication for building and designing web applications remains strong, fueled by the opportunity to blend my previous knowledge of design/creativity with cutting-edge technologies. Despite my young age, I still remain driven to learn and improve. If you have any questions or comments feel free to reach out via <a href="https://www.linkedin.com/in/raychu83/" className='cursor-pointer text-blue-500 hover:text-blue-600 w-fit' target='_blank' rel="noreferrer">LinkedIn</a> or through <a href="mailto:rayc12079@gmail.com" className='cursor-pointer text-blue-500 hover:text-blue-600 w-fit' target='_blank' rel="noreferrer">Email</a>.</li>
        </ul>
      </div>
    </motion.article>
  )
}