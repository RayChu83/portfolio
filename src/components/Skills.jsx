import React from 'react'
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section className='p-8' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <h1 className='text-2xl font-bold'>Technologies:</h1>
      <br />
      <div className='flex flex-wrap items-center gap-4 justify-center'>
        <img src="./assets/html.png" alt="HTML" className='drop-shadow-md cursor-pointer' title='HTML'/>
        <img src="./assets/css.png" alt="CSS" className='drop-shadow-md cursor-pointer' title='CSS'/>
        <img src="./assets/javascript.png" alt="JAVASCRIPT" className='drop-shadow-md cursor-pointer' title='Javascript'/>
        <img src="./assets/typescript.png" alt="TYPESCRIPT" className='drop-shadow-md cursor-pointer' title='Typescript'/>
        <img src="./assets/react.png" alt="REACT" className='drop-shadow-md cursor-pointer' title='React.js'/>
        <img src="./assets/reactRouter.png" alt="REACT ROUTER" className='drop-shadow-md cursor-pointer' title='React Router'/>
        <img src="./assets/next.png" alt="NEXT" className='drop-shadow-md cursor-pointer' title='Next.js'/>
        <img src="/assets/firebase.png" alt="FIREBASE" className='drop-shadow-md cursor-pointer' title='Firebase'/>
        <img src="./assets/redux.png" alt="REDUX" className='drop-shadow-md cursor-pointer' title='Redux'/>
        <img src="./assets/tailwind.png" alt="TAILWIND" className='drop-shadow-md cursor-pointer' title='Tailwind'/>
      </div>
    </motion.section>
  )
}
