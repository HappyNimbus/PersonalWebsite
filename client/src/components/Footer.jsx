import React from 'react'
import './Footer.css';
import Logo from "../images/logo.png"
const Footer = () => {
  return (
    <footer>
      <img className = "sizeF" src = {Logo} alt="" />
      <span> Made by Maksim Kolotev</span>
    </footer>

  )
}

export default Footer