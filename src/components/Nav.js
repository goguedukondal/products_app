import React from 'react'
import {Link} from "react-router-dom"
import './Nav.css'
function Nav() {
  return (
    <div className='nav'>
      <div id ="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">ContactUs</Link>
        <Link to='/tech'>Technologies</Link>
      </div>
    </div>
  )
}

export default Nav