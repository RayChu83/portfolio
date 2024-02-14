import React from 'react'
import photo from "../pfp.jpg"

export default function Greeting() {
  return (
    <section className='flex items-center justify-between p-8 flex-wrap gap-2' id='greeting'>
      <article className='flex flex-col gap-2'>
        <p className='font-medium'>👋 Hello, I am...</p>
        <h1 className='text-6xl font-extrabold'>Ray Chu </h1>
        <h2 className='text-2xl font-bold'>Front-End Developer</h2>
        <a href="#projects" className='cursor-pointer text-1xl text-blue-500 font-medium hover:text-blue-600'>View Projects</a>
      </article>
      <img src={photo} alt='profile' width="225" className='rounded-full drop-shadow-md	'/>
    </section>
  )
}
