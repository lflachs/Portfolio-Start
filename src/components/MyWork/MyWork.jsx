import React, { useState } from 'react';
import Project from '../Project/Project';
import ProjectList from '../Project/ProjectList';
import ButtonSort from "../ButtonSort/ButtonSort";
import "./MyWork.scss";

const projectsList = [
    {
        id: 'project1',
        title: "My Project 1",
        language: ["HTML/CSS"],
        img: require('../../img/Project/project1.png')
    },
    {
        id: 'project1',
        title: "My Project 2",
        language: ["HTML/CSS", "React"],
        img: require('../../img/Project/project1.png')

    },

]

class MyWork extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: projectsList
        }
    }
    render() {
        const { darkMode } = this.props;
        const { projects } = this.state;
        const onSelectWork = (event) => {
            this.setState({
                projects:
                    projectsList.filter(element => {
                        return element.language.includes(event.target.value)
                    })
            })
        }
        const onSelectAll = () => {
            this.setState({ projects: projectsList })
        }
        const style = {
            bg: {
                backgroundColor: darkMode ? "#2E2E2E" : "white"
            },
            textColor: {
                color: darkMode ? "white" : "#2E2E2E"
            }

        }
        return (
            <section id="myWork" className="section" style={style.bg}>
                <h1 className="title" style={style.textColor}>My Work</h1>
                <div className="select-project">
                    <ButtonSort onSelect={onSelectAll} text="Select All" />
                    <ButtonSort onSelect={onSelectWork} text="HTML/CSS" />
                    <ButtonSort onSelect={onSelectWork} text="Js" />
                    <ButtonSort onSelect={onSelectWork} text="React" />

                </div>
                <ProjectList projects={projects} styling={style} />

            </section>
        )
    }
}
export default MyWork;