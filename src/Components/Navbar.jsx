import React from 'react'
import logo from '../assets/Techmate New Logo-2024.jpg'
const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src ={logo} alt='Techmate logo'/>
      <ul>
        <li > home</li>
        <li > about</li>
        <li > service</li>
        <li > blog</li>
      </ul>
    </div>
  )
}

export default Navbar