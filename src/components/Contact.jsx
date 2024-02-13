import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""})
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name] : value}))
  }
  return (
    <section className='flex items-center justify-between gap-2 p-8' id='contact'>
      <article className='w-3/6'>
        <h1 className='text-2xl font-bold'>Feel Free to Contact Me:</h1>
        <a href='mailto:rayc12079@gmail.com'>- rayc12079@gmail.com</a>
        <p>- 646-925-0205</p>
      </article>
      <form className='flex flex-col gap-4 w-3/6'>
        <input type="text" className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2 drop-shadow-md' placeholder='Name' value={formData.name} onChange={handleChange} name="name" required/>
        <input type="email" className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2 drop-shadow-md' placeholder='Email' value={formData.email}onChange={handleChange} name="email" required/>
        <textarea className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2 drop-shadow-md' placeholder='Message' value={formData.message} onChange={handleChange} name="message" required></textarea>
        <button className=' bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600'>Submit</button>
      </form>
    </section>
  )
}
