import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaGit, FaGithub } from "react-icons/fa";
import { SiTypescript, SiCanva, SiRedux, SiMongodb } from 'react-icons/si';
import './SkillsSection.css'

function SkillsSection() {
  return (
    <div>
      <div className='section-wrap'>
        <div className='ts-container'>
          <div className='info-text'>
            <h1>Skills</h1>
            <p>These are the skills I am Well versed in. </p>
          </div>
          <div className="skills-container">
            <div className="icon-container">
              <FaHtml5 className="skill-icon" />
              <h3>HTML5</h3>
            </div>
            <div className="icon-container">
              <FaCss3Alt className="skill-icon" />
              <h3>CSS3</h3>
            </div>
            <div className="icon-container">
              <FaJs className="skill-icon" />
              <h3>JavaScript</h3>
            </div>
            <div className="icon-container">
              <FaReact className="skill-icon" />
              <h3>Reactjs</h3>
            </div>
            <div className="icon-container">
              <FaNode className="skill-icon" />
              <h3>NodeJS</h3>
            </div>
            <div className="icon-container">
              <SiTypescript className="skill-icon" />
              <h3>Typescript</h3>
            </div>
            <div className="icon-container">
              <SiRedux className="skill-icon" />
              <h3>Redux</h3>
            </div>
            <div className="icon-container">
              <FaGit className="skill-icon" />
              <h3>Git</h3>
            </div>
            <div className="icon-container">
              <FaGithub className="skill-icon" />
              <h3>GitHub</h3>
            </div>
            <div className="icon-container">
              <SiMongodb className="skill-icon" />
              <h3>MongoDB</h3>
            </div>
            <div className="icon-container">
              <FaPython className="skill-icon" />
              <h3>Python</h3>
            </div>
            <div className="icon-container">
              <SiCanva className="skill-icon" />
              <h3>Canva</h3>
            </div>
          </div>
        </div>
        <div  className="tb-container">
          <p>Read more about my skills</p>
          <NavLink to='/Skills'><button className="btn">Skills</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection