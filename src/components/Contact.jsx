import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    <motion.section className='flex justify-between gap-4 p-8 sm:flex-row flex-col sm:items-center' id='contact' initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : ".6", ease : "easeInOut"}} viewport={{ once: true }}>
      <article className='sm:w-3/6 w-full'>
        <h1 className='text-2xl font-bold'>Feel Free to Reach Out:</h1>
        <ul>
          <li><a href="mailto:rayc12079@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> rayc12079@gmail.com</a></li>
          <li><FontAwesomeIcon icon={faComment} /> 646-925-0205</li>
          <li><a href="https://www.linkedin.com/in/raychu83/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
        </ul>
      </article>
      <form className='flex flex-col gap-4 w-full sm:w-3/6 drop-shadow-md' onSubmit={sendEmail} ref={form}>
        {formMessage && <p className={`text-center p-2 rounded-md ${formMessage === "Message Sent!" ? "bg-green-400" : "bg-red-400"} text-white font-semibold`}>{formMessage}</p>}
        <input type="text" className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2' placeholder='Name' value={formData.name} onChange={handleChange} name="name" required/>
        <input type="email" className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2' placeholder='Email' value={formData.email}onChange={handleChange} name="email" required/>
        <textarea className='bg-gray-100 rounded-md border-none outline-blue-500 placeholder:text-gray-500 p-2' placeholder='Message' value={formData.message} onChange={handleChange} name="message" required></textarea>
        <button className=' bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600'>Submit</button>
      </form>
    </motion.section>
  )
}
