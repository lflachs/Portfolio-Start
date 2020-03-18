import React from 'react'
import Project from "./Project";
function ProjectList({ projects, styling }) {
    return (
        <div className="projects-container">
            {projects.map(project => <Project {...project} styling={styling} />)}
        </div>
    )
}

export default ProjectList;