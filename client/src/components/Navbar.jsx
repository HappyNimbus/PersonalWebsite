import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../images/logo.png"
import './Navbar.css';
const Navbar = () => {
  return (
        <div className = 'container'>
          <div className="logo">
           <img className = 'size' src = {Logo} alt = "" />
           </div>
          <div className="links">
            <Link className = "link" to = "/?cat=games">
              <h6>Games</h6>
            </Link>
            <Link className = "link" to = "/?cat=projects">
              <h6>Projects</h6>
            </Link>
            <Link className = "link" to = "/?cat=aboutme">
              <h6>About Me</h6>
            </Link>
            <Link className = "link" to = "/?cat=devlog">
              <h6>Dev Log</h6>
            </Link>
            <span> Max </span>
            <span> Logout</span>
            <span className="write">
              <Link className = "link"to = "/write"> Write </Link>
            </span>
          </div>
        </div>
  )
}

export default Navbar