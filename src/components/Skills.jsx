import React from 'react'
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import reactRouter from "../images/reactRouter.png"
import firebase from "../images/firebase.png"
import redux from "../images/redux.png"
import tailwind from "../images/tailwind.png"

export default function Skills() {
  return (
    <section className='p-8'>
      <h1 className='text-2xl font-bold'>My Skills:</h1>
      <br />
      <div className='flex flex-wrap items-center gap-4 justify-center'>
        <img src={html} alt="HTML" className='drop-shadow-md'/>
        <img src={css} alt="CSS" className='drop-shadow-md'/>
        <img src={javascript} alt="JAVASCRIPT" className='drop-shadow-md'/>
        <img src={react} alt="REACT" className='drop-shadow-md'/>
        <img src={reactRouter} alt="REACT ROUTER" className='drop-shadow-md' />
        <img src={firebase} alt="FIREBASE" className='drop-shadow-md'/>
        <img src={redux} alt="REDUX" className='drop-shadow-md'/>
        <img src={tailwind} alt="TAILWIND" className='drop-shadow-md'/>
      </div>
    </section>
  )
}
