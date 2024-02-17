import React from 'react'
import { motion } from 'framer-motion';

import html from "../images/html.png"
import css from "../images/css.png"
import python from "../images/python.png"
import django from "../images/django.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import reactRouter from "../images/reactRouter.png"
import firebase from "../images/firebase.png"
import redux from "../images/redux.png"
import tailwind from "../images/tailwind.png"

export default function Skills() {
  return (
    <motion.section className='p-8' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <h1 className='text-2xl font-bold'>Technical Skills:</h1>
      <br />
      <div className='flex flex-wrap items-center gap-4 justify-center'>
        <img src={html} alt="HTML" className='drop-shadow-md cursor-pointer'/>
        <img src={css} alt="CSS" className='drop-shadow-md cursor-pointer'/>
        <img src={python} alt="PYTHON" className='drop-shadow-md cursor-pointer'/>
        <img src={django} alt="DJANGO" className='drop-shadow-md cursor-pointer'/>
        <img src={javascript} alt="JAVASCRIPT" className='drop-shadow-md cursor-pointer'/>
        <img src={react} alt="REACT" className='drop-shadow-md cursor-pointer'/>
        <img src={reactRouter} alt="REACT ROUTER" className='drop-shadow-md cursor-pointer' />
        <img src={firebase} alt="FIREBASE" className='drop-shadow-md cursor-pointer'/>
        <img src={redux} alt="REDUX" className='drop-shadow-md cursor-pointer'/>
        <img src={tailwind} alt="TAILWIND" className='drop-shadow-md cursor-pointer'/>
      </div>
    </motion.section>
  )
}
