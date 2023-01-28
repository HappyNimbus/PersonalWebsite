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
            <Link className = "link" to = "/?cat=art">
                <h6>ART</h6>
              </Link>
            <Link className = "link" to = "/?cat=test">
              <h6>TEST</h6>
            </Link>
            <Link className = "link" to = "/?cat=meme">
              <h6>MEME</h6>
            </Link>
          </div>
        </div>
  )
}

export default Navbar