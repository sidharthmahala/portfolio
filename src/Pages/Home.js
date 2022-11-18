import React from 'react'
import Header from '../components/Header'
//import Button from '../components/Button'
import SocialIcons from '../components/SocialIcons'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <div className='hero--container'>
        <div className='img--contanier'>
          <img className="profile" src={require('../Assets/3dimg/businessman-working-on-laptop.png')} alt='' />
        </div>
        <div className='icons--container'>
          <SocialIcons />
        </div>
        <div className='info--card'>
          <h1>Hey</h1>
        </div>
      </div>
    </>
  )
}

export default Home