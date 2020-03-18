import React from 'react'
import "./Project.scss";


function Project({ title, img, styling }) {
    // const bgImage = require(`${imgPath}/${id}.png`);

    const style = {
        ...styling,
        projectPic: {
            backgroundImage: `url("${img}")`
        }
    }
    return (
        <div className="project-item">
            <h2 className="project-title" style={style.textColor} >{title}</h2>
            <div className="project-pic" style={style.projectPic} />
        </div>

    )
}
export default Project