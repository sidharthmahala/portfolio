import React from 'react'
import SocialIcons from '../components/SocialIcons'
import './Hero.css'

function Hero() {
  return (
    <div className='hero--container'>
      <div className='img--contanier'>
        <img src={require('../Assets/profile.png')} alt='' />
      </div>
      <div className='icons--container'>
        <SocialIcons />
      </div>
      <div className='info--card'>
        <h1>Hey</h1>
      </div>
    </div>
  )
}

export default Hero