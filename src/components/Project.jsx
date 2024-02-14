import React from 'react'
import ConnectMe from "../ConnectMe.png"
import Tag from './Tag'

export default function Project() {
  // not dynamic, we would like to get this data from a db particularly firebase firestore
  return (
    <article className='flex items-center my-2 bg-gray-100 rounded-2xl drop-shadow-md gap-6 p-6 flex-col md:flex-row'>
      <img src={ConnectMe} alt="ConnectMe Project" className='rounded-xl w-full md:w-2/5'/>
      <div className='flex flex-col gap-1.5'>
        <h1 className='text-1xl font-bold'>Connect Me | Online Social Network </h1>
        <div className='flex items-center gap-2 flex-wrap'>
          <Tag tag="React Router V6"/>
          <Tag tag="Firebase"/>
          <Tag tag="Redux"/>
        </div>
        <p>Connect Me is a online social network where users can create, comment and interact with posts, customize your profiles, connect with others by following & more</p>
        <div className='flex items-center gap-2'>
          <a href='https://app-connectme.netlify.app/' target='_blank' rel="noreferrer" className='p-2 rounded-md bg-blue-500 font-semibold text-white text-sm'>View Live</a>
          <a href="https://github.com/RayChu83/ConnectMe" target='_blank' rel="noreferrer" className='p-2 rounded-md bg-black font-semibold text-white text-sm'>Source Code</a>
        </div>
      </div>
    </article>
  )
}
