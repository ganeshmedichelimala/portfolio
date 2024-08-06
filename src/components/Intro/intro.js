import React from 'react'
import './intro.css'
import bgimage from '../../assets/imageout.png';
import btnimage from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,  </span>
            <span className='introtext'>I'm <span className='introname'>Ganesh Medichelimala</span><br/>Website Developer</span>
            <p className='introPara'>I'm a skilled web developer with experince in creating <br/> fully functional full stack websites </p>        
            <Link><button className='hirebtn'><img src={btnimage}alt="nio"  className='btnimg'/>Hire Me</button></Link>
        </div>
    </section>
  )
}

export default Intro;