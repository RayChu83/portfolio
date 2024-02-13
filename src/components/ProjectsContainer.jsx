import React from 'react'
import Project from './Project'

export default function ProjectsContainer() {
  return (
    <section className='p-8' id='projects'>
      <h1 className='text-2xl font-bold'>Personal Projects:</h1>
      <p>Transforming <strong>design drafts</strong> into a <strong>refined craft</strong>.</p>
      <Project />
    </section>
  )
}
