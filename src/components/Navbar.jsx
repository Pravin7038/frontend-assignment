import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/sign-up">Sign up Page</Link>
        <Link to="/login">Login Page</Link>
    </div>
  )
}

export default Navbar