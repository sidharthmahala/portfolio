import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectSection.css'

function ProjectSection() {
    return (
        <div className="project-section-container">
            <div className="section-title">
                <h1>Projects</h1>
                <h5>Featured Projects</h5>
            </div>
            <div className="project-container">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
            <NavLink to="/Projects"><button className='btn'>Projects</button></NavLink>

        </div>
    )
}

export default ProjectSection