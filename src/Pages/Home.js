import React from 'react'
import Header from '../components/Header'
import '../components/Button.css'
import SocialIcons3d from '../components/SocialIcons3d'
import './Home.css'

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
          <p>I am a front-end developer from India. I have good experience in developing web applications using HTML5, CSS3, JavaScript, and React Js. I am currently looking for an opportunity to help in building something meaningful and useful.</p>
          <div className="btn-container">
            <button className="btn">Get In Touch</button>
            <button className="btn">Resume</button>
          </div>
        </div>
        <img className="profile" src={require('../Assets/Compressed/man-holding-a-dog.png')} alt=''
        />
        {/* <img className="profile" src={require('../Assets/Compressed/man-sitting-with-a-laptop-and-waving-his-hand.png')} alt='' /> */}
      </div>
    </div>
  )
}

export default Home