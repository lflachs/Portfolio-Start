import React, { Component } from 'react'
import './AboutMe.scss'
import profilePics from "../../img/profilePics.jpeg"
import Button from "../UI/Button"

function AboutMe() {
    const style = {
        profilePic: {
            backgroundImage: `url(${profilePics})`
        }
    }
    return (
        <section id="about-me" className="section">
            <div className='about-me-details'>
                <h1 className="title">👨About Me</h1>
                <div className="about-me profile-pic" style={style.profilePic} />
                <p className="about-me-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a molestie lectus. Nam eu eros diam. Aliquam at libero consequat, rhoncus risus nec, interdum nisi. </p>
                <Button
                    buttonText="View my resume"
                />
            </div>
        </section>
    )
}
export default AboutMe;