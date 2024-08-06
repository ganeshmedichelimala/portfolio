import React from 'react'
import './about.css';
import uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";

const About = () => {
  return (
    <section id="about">
        <span className="aboutTitle">What  <span className='i'> i </span>do</span>
        <span className='aboutDesc'>I am a Web developer specializing in creating user-centric, visually engaging, and intuitive digital experiences, as well as a cyber analyst focused on analyzing security data, identifying vulnerabilities, and developing strategies to protect against cyber threats.</span>
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={uidesign} alt="webimg" className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>UI/UX Designing</h2>
                    <p>I am a UI/UX designer specializing in creating user-centric, visually engaging, and intuitive digital experiences.</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={webdesign} alt="web" className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Web Developer</h2>
                    <p>
                    I am a web developer skilled in building responsive, efficient, and dynamic websites and applications.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About;