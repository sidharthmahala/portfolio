import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className="project-card">
        <h3>{props.projectTitle}</h3>
        <img src={props.img} alt=""/>
        <p>{props.projectDescription}</p>
    </div>
  )
}

export default ProjectCard