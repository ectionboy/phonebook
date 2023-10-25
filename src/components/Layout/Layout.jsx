import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>Layout
        
        <p></p>
        <Link to="/contacts">contacts</Link>
        <p></p>
        <Link to="/register">register</Link>
        <p></p>
        <Link to="/login">login</Link>
    </div>
  )
}

export default Layout