import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard'
import './ProjectSection.css'

function ProjectSection() {
    return (
        <div className="project-section-container">
            <div className="section-title">
                <h1>Projects</h1>
                <h5>Featured Projects</h5>
            </div>
            <div className="project-container">
                <ProjectCard projectTitle="Web3 DashBoard" img={require('../../Assets/developer.png')}
                    projectDescription="Hello" />
                <ProjectCard projectTitle="Portfolio" img={require('../../Assets/portfolio-full.png')} />
            </div>
            <div className="pbtn">
                <p>More Projects on projects page</p>
                <NavLink to="/Projects"><button className='btn'>Projects</button></NavLink>
            </div>

        </div>
    )
}

export default ProjectSection