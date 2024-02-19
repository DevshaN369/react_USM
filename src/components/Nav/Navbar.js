import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbar__title'>UserManagementSystem</h1>
      <div className='navbar__links'>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>

      </div>

    </div>
  )
}

export default Navbar