import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"


function NavBar() {
  return (
   <nav className="navbar bg-dark container">
    <h4 ><Link to="/" className="link">Home</Link></h4>
    <h4 ><Link to="/notes" className="link">Notes</Link></h4>
    <h4 ><Link to="/make" className="link">Make Notes</Link></h4>
   </nav>
  )
}

export default NavBar