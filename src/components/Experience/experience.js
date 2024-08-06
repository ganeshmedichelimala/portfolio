import React from 'react'
import "./experience.css";
import vnr from "../../assets/vnr.png"
import purecode from "../../assets/purecode.png"

const Experience = () => {
  return (
    <section id="exp">
        <span className="expTitle">Education <span className='and'>& </span>Experience</span>
        <span className='expDesc'>I completed my B.Tech in Computer Science and Engineering, and I have extensive experience in frontend development. </span>
        <div className='expBars'>
            <div className='expBar'>
                <p id='MECS'>MATRUSRI ENGINEERING COLLEGE</p>
                <div className='expBarText'>
                    <h2>Graduation</h2>
                    <p> I completed my graduation in CSE with an aggregate CGPA of 7.01.</p>
                </div>
            </div>

           
        </div>
    </section>
  )
}

export default Experience