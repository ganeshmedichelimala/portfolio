import React from 'react'
import "./skills.css"
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import JavaScript from "../../assets/js.png";
import Reactt from "../../assets/react.png";
import Pythonn from "../../assets/python.png";
import Bootstrap from "../../assets/bootstrap.png";
import MongoDB from "../../assets/monodb.png";
import Nodejs from "../../assets/nodejs.png";
import Express from "../../assets/express.png";


const Skills = () => {
  return (
    <section id="skills"> 
        <h2 className='skillTitle'>My <span className='s'> S</span>kills</h2>
        <span className='skillDesc'>I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Python, SQL, and Bootstrap, enabling me to create dynamic and responsive web applications. My diverse skill set allows me to develop full-stack solutions with robust front-end interfaces and efficient back-end infrastructures.</span>
        <div className='skillImgs'>
            <img src={Html} alt="HTML" className='skillImg'/>
            <img src={Css} alt="CSS" className='skillImg'/>
            <img src={Bootstrap} alt="BOOT" className='skillImg'/>
            <img src={JavaScript} alt="JS" className='skillImg'/>
            <img src={Reactt} alt="REACT" className='skillImg'/>
            <img src={Pythonn}alt="PYTHON" className='skillImg'/>
            <img src={MongoDB} alt="MONGO" className='skillImg'/>
            <img src={Nodejs} alt="NODE" className='skillImg'/>
            <img src={Express} alt="EXPRESS" className='skillImg'/>
        </div>
    </section>
  )
}

export default Skills