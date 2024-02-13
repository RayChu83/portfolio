import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""})
  const [formMessage, setFormMessage] = useState("")
  const form = useRef()
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name] : value}))
  }
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_pdgromf", "template_3z21py9", form.current, {
      publicKey : "6zZYN0aDPvgqb7fDq",
    })
    .then(() => {
      setFormData({name: "", email: "", message: ""})
      setFormMessage("Message Sent!")
    })
    .catch(err => setFormMessage("An error has occurred. Please try again later!"))
    // clear the form data
  }
  return (
    <section className='flex items-center justify-between gap-2 p-8' id='contact'>
      <article className='w-3/6'>
        <h1 className='text-2xl font-bold'>Feel Free to Contact Me:</h1>
        <a href='mailto:rayc12079@gmail.com'>- rayc12079@gmail.com</a>
        <p>- 646-925-0205</p>
      </article>
      <form className='flex flex-col gap-4 w-3/6' onSubmit={sendEmail} ref={form}>
        {formMessage && <p className={`text-center p-2 rounded-md ${formMessage === "Message Sent!" ? "bg-green-400" : "bg-red-400"} text-white font-semibold`}>{formMessage}</p>}
        <input type="text" className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2 drop-shadow-md' placeholder='Name' value={formData.name} onChange={handleChange} name="name" required/>
        <input type="email" className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2 drop-shadow-md' placeholder='Email' value={formData.email}onChange={handleChange} name="email" required/>
        <textarea className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2 drop-shadow-md' placeholder='Message' value={formData.message} onChange={handleChange} name="message" required></textarea>
        <button className=' bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600'>Submit</button>
      </form>
    </section>
  )
}
