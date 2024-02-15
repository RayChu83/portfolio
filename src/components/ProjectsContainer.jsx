import React from 'react'
import ConnectMe from './ConnectMe'

export default function ProjectsContainer() {
  return (
    <section className='p-8 drop-shadow-md' id='projects'>
      <h1 className='text-2xl font-bold'>Personal Projects:</h1>
      <p>Transforming <strong>design drafts</strong> into a <strong>refined craft</strong>.</p>
      <ConnectMe />
    </section>
  )
}
