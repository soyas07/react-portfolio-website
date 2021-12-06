import React from 'react'
import aboutMe from '../assets/about_me.png'

function About() {
    return (
        <section className="wrapper-secondary about-wrapper">
            <div className="left-content margin-container">
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button>Download CV</button>
            </div>
            <div className="right-content">
                <img src={aboutMe} alt="About Me" />
            </div>
        </section>
    )
}

export default About
