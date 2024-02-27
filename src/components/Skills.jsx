import React from 'react'
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section className='p-8' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <h1 className='text-2xl font-bold'>Technical Skills:</h1>
      <br />
      <div className='flex flex-wrap items-center gap-4 justify-center'>
        <img src="./assets/html.png" alt="HTML" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/css.png" alt="CSS" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/python.png" alt="PYTHON" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/django.png" alt="DJANGO" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/javascript.png" alt="JAVASCRIPT" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/react.png" alt="REACT" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/reactRouter.png" alt="REACT ROUTER" className='drop-shadow-md cursor-pointer' />
        <img src="/assets/firebase.png" alt="FIREBASE" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/redux.png" alt="REDUX" className='drop-shadow-md cursor-pointer'/>
        <img src="./assets/tailwind.png" alt="TAILWIND" className='drop-shadow-md cursor-pointer'/>
      </div>
    </motion.section>
  )
}
