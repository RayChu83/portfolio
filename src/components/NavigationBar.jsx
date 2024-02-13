import React from 'react'
import Logo from "../logo.png"

export default function NavigationBar() {
  return (
    <nav className='bg-gray-100 h-16 m-4 rounded-2xl drop-shadow flex items-center p-4 justify-between'>
      <img src={Logo} alt="logo" height="35px" width="35px" className='cursor-pointer'/>
      <ul className='flex list-none items-center gap-6'>
        <a href="#greeting">
          <li className='cursor-pointer font-medium'>Home</li>
        </a>
        <a href="#about">
          <li className='cursor-pointer font-medium'>About</li>
        </a>
        <a href="#projects">
          <li className='cursor-pointer font-medium'>Projects</li>
        </a>
        <a href="#contact">
          <li className='cursor-pointer font-medium'>Contact</li>
        </a>
      </ul>
    </nav>
  )
}