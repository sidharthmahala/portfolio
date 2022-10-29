import React from 'react'
import './Header.css'

function Header() {
  return (
      <div className="header--container">
        <div className="logo--container">
          <h1>SIDHARTH MAHALA</h1>
        </div>
        <nav className="nav--container">
          <a className="nav--item" href="#about">
            About
          </a>
          <a className="nav--item" href="#skills">
            Skills
          </a>
          <a className="nav--item" href="#projects">
            Projects
          </a>
          <a className="nav--item" href="#contact">
            Contact
          </a>
          <a className="nav--item" href="#resume">
            Resume
          </a>
          <a className="nav--item" href="#blog">
            Blog
          </a>
          <button className="theme-toggle-btn">Light/Dark</button>
        </nav>
        <div className='hb--menu'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

    </div>
  )
}

export default Header