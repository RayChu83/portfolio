import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavigationBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  return (
    <nav className={`bg-gray-100 my-6 mx-4 rounded-2xl drop-shadow-md flex items-center p-6 justify-between gap-6 ${dropdownVisible && "flex-col"}`}>
      <section className='flex justify-between items-center w-full'>
        <img src="./assets/logo.png" alt="logo" width="35" className='cursor-pointer'/>
        <FontAwesomeIcon icon={faBars} className='block sm:hidden text-xl cursor-pointer' onClick={() => setDropdownVisible(prev => !prev)}/>
      </section>
      <ul className={`list-none items-center gap-6 sm:flex ${dropdownVisible ? "flex flex-col" : "hidden flex-row"}`}>
        <a href="#greeting" onClick={() => setDropdownVisible(false)}>
          <li className='cursor-pointer font-medium'>Home</li>
        </a>
        <a href="#about" onClick={() => setDropdownVisible(false)}>
          <li className='cursor-pointer font-medium'>About</li>
        </a>
        <a href="#projects" onClick={() => setDropdownVisible(false)}>
          <li className='cursor-pointer font-medium'>Projects</li>
        </a>
        <a href="#contact" onClick={() => setDropdownVisible(false)}>
          <li className='cursor-pointer font-medium'>Contact</li>
        </a>
      </ul>
    </nav>
  )
}