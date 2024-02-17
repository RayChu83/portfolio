import React from 'react'
import { motion } from 'framer-motion';

import ConnectMe from './ConnectMe'

export default function ProjectsContainer() {
  return (
    <motion.section className='p-8 drop-shadow-md' id='projects'  initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <h1 className='text-2xl font-bold'>Personal Projects:</h1>
      <p>Transforming <strong>design drafts</strong> into a <strong>refined craft</strong>:</p>
      <ConnectMe />
    </motion.section>
  )
}
