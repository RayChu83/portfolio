import React from 'react'
import ConnectMe from "../ConnectMe.png"

export default function Project() {
  // not dynamic, we would like to get this data from a db particularly firebase firestore
  return (
    <a href='https://app-connectme.netlify.app/' target='_blank' rel="noreferrer">
      <article className='flex items-center my-2 bg-gray-100 rounded-2xl drop-shadow-md gap-6 cursor-pointer p-8'>
        <img src={ConnectMe} alt="ConnectMe Project" width="25%" className='rounded-2xl '/>
        <div>
          <h1 className='text-1xl font-bold'>Connect Me | Online Social Network </h1>
          <p>Connect Me is a online social network where users can create, comment and interact with posts, customize your profiles, connect with others by following & more</p>
        </div>
      </article>
    </a>
  )
}
