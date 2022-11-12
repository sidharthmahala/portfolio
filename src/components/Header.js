import React from 'react'
import { NavLink } from 'react-router-dom'
//import { useState } from "react";
//import {Router, Routes, Route} from 'react-router-dom'
import './Header.css'

function Header() {
  //const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="header--container">
      <div className="logo--container">
        <h1><NavLink to='/'>SIDHARTH MAHALA</NavLink></h1>
      </div>
      <nav className="nav--container">
        <div className="nav--link">
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className="nav--link">
          <NavLink to='/About'>About</NavLink>
        </div>
        <div className="nav--link">
          <NavLink to='/Skills'>Skills</NavLink>
        </div>
        <div className="nav--link">
          <NavLink to='/Projects'>Projects</NavLink>
        </div>
        <div className="nav--link">
          {/* <a href='../Assets/ResumeSidharthm.pdf' target='_blank'>Resume</a> */}
          <NavLink to='../Assets/ResumeSidharthm.pdf' target='_blank'>Resume</NavLink>
        </div>
        <div className="nav--link">
          <NavLink to='/Blog'>Blog</NavLink>
        </div>
        <div className="nav--link"><NavLink to='/Contact'>
          Contact
        </NavLink>
        </div>
        {/* <button className="theme-toggle-btn">Light/Dark</button> */}
      </nav>
      <button className='hamburger--menu'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
    </div>
  )
}

export default Header