import React from 'react'
import SocialIcons from '../components/SocialIcons'
import './UnderCon.css'
function UnderCon() {
    return (
        <div className="container">
            <div className="img-container">
                <img src={require('../Assets/profile1.png')} alt="Under Construction illustration" />
            </div>
            <div className="wrap">
                <button className="btn"><span className="text"><a href="https://drive.google.com/file/d/1cE2U4sOAs95fGZE32YNKfk6Hopnsiklm/view?usp=share_link">Download Resume</a></span></button>
            </div>
            <SocialIcons/>
        </div>
    )
}

export default UnderCon