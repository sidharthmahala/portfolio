import React from 'react'
import Header from '../components/Header'
//import Button from '../components/Button'
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
          <h1>Hey, I'm Sidharth</h1>
          <h1>👋</h1>
          <p>Frontend developer</p>
        </div>
        <div className='img-contanier'>
          <img className="profile" src={require('../Assets/Compressed/man-holding-a-dog.png')} alt='' />
          {/* <img className="profile" src={require('../Assets/Compressed/man-sitting-with-a-laptop-and-waving-his-hand.png')} alt='' /> */}
        </div>
      </div>
    </div>
  )
}

export default Home