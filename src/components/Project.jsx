import React from 'react'
import ConnectMe from "../ConnectMe.png"
import Tag from './Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

export default function Project() {
  // not dynamic, we would like to get this data from a db particularly firebase firestore
  return (
    <article className='flex items-center my-4 bg-gray-100 rounded-2xl gap-6 flex-col lg:flex-row overflow-hidden'>
      <img src={ConnectMe} alt="ConnectMe Project" className='w-full lg:w-2/5 hover:scale-105 duration-300 ease-in-out'/>
      <div className='flex flex-col gap-1.5 p-6'>
        <h1 className='text-1xl font-bold'>Connect Me | Online Social Network </h1>
        <div className='flex items-center gap-2 flex-wrap'>
          <Tag tag="React Router V6"/>
          <Tag tag="Firebase"/>
          <Tag tag="Redux"/>
        </div>
        <p>Connect Me is a online social network where users can create, comment and interact with posts, customize your profiles, connect with others by following & more</p>
        <div className='flex items-center gap-2 flex-wrap'>
          <a href='https://app-connectme.netlify.app/' target='_blank' rel="noreferrer" className='p-2 rounded-md bg-blue-500 font-semibold text-white text-sm'><FontAwesomeIcon icon={faLink}/> View Live</a>
          <a href="https://github.com/RayChu83/ConnectMe" target='_blank' rel="noreferrer" className='p-2 rounded-md bg-black font-semibold text-white text-sm'><FontAwesomeIcon icon={faCode} /> Source Code</a>
        </div>
      </div>
    </article>
  )
}
