import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import SocialIcons3d from '../components/SocialIcons3d'
import '../components/Button.css'
import SkillsSection from './Home/SkillsSection'
import ProjectSection from './Home/ProjectSection'
import './Home.css'
//import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <div className='icons-container'>
        <SocialIcons3d />
      </div>
      <div className='home-container'>
        <div className='info-card'>
          <h1>Hey, I'm Sidharth 👋</h1>
          <p>I am a front-end developer from India. I have good experience in developing web applications using HTML5, CSS3, JavaScript, and React Js.</p>
          <div className="btn-container">
            <NavLink to='/Contact'>
              <button className="btn">Get In Touch</button>
            </NavLink>
            <a href="https://drive.google.com/file/d/1cE2U4sOAs95fGZE32YNKfk6Hopnsiklm/view" Target="_blank" rel="noopener"className="btn">Download Resume</a>
            {/* <button ><</button> */}
          </div>
        </div>
        <img className="profile" src={require('../Assets/Compressed/guy-working.png')} alt=''
        />
        {/* <img className="profile" src={require('../Assets/Compressed/man-sitting-with-a-laptop-and-waving-his-hand.png')} alt='' /> */}
      </div>
      <SkillsSection />
      <ProjectSection />
      {/* <Footer /> */}
    </div>
  )
}

export default Home