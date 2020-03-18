import React from 'react'
import './Header.scss'

import Toggle from '../../img/toggle.svg';
import GitHub from '../../img/gitHub.svg';
import LinkedIn from '../../img/linkedIn.svg';
import CodePen from '../../img/codePen.svg';
import DownArrow from '../../img/downArrow.svg';


class Header extends React.Component {
    render(props) {
        const { onToggleChange, darkMode } = this.props;
        const style = {
            header: {
                backgroundColor: darkMode ? "#2E2E2E" : "white"
            },
            textColor: {
                color: darkMode ? "white" : "#2E2E2E"
            },
            svgColor: {
                filter: darkMode ? '' : 'invert(1)'
            }

        }
        return (
            <section id="header" className='section' style={style.header} >
                <img style={style.svgColor} className="dark-mode-toggle" onClick={onToggleChange} src={Toggle} />
                <h3 className="header-picto">👋</h3>
                <h1 className="header-headline title" style={style.textColor}>Hello I'm <span className="text-green">Léonard</span>.</h1>
                <h1 className="header-headline title" style={style.textColor}>I'm a web Developer.</h1>
                <div className="header-social">
                    <img style={style.svgColor} className="header-social-item" src={CodePen} />
                    <img style={style.svgColor} className="header-social-item" src={GitHub} />
                    <img style={style.svgColor} className="header-social-item" src={LinkedIn} />
                </div>
                <div className="scroll-button">
                    <h4 style={style.textColor} >Scroll Down</h4>
                    <img style={style.svgColor} src={DownArrow} />
                </div>
            </section>

        )
    }
}

export default Header