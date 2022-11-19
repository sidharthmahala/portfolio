import React from 'react'
import './SocialIcons.css'

function SocialIcons3d() {
    return (
        <div className='icon-wrap'>
            <a href='https://github.com/sidharthmahala' target='_blank' rel="noopener noreferrer">
                <img src={require("../Assets/Compressed/github-min.png")} alt="github-icon" style={{
                    position: 'fixed',
                    top: '250px',
                    left: '20px',
                }}
                />

            </a>
            <a href='https://www.linkedin.com/in/sidharthmahala/' target='_blank' rel="noopener noreferrer">
                <img src={require("../Assets/Compressed/linkedin-min.png")} alt="linkedin-icon" style={{
                    position: 'fixed',
                    top: '310px',
                    left: '20px',
                }}

                />
            </a>

            <a href='mailto:sidharthmahala@gmail.com'>
                <img src={require("../Assets/Compressed/email.png")} className="email-icon" alt="email-icon" style={{
                    position: 'fixed',
                    top: '440px',
                    left: '30px',
                }}

                />
            </a>
            <a href='https://twitter.com/MahalaSidharth' target='_blank' rel="noopener noreferrer">
                <img src={require("../Assets/Compressed/twitter-min.png")} alt="" style={{
                    position: 'fixed',
                    top: '370px',
                    left: '20px',
                }}
                />
            </a>
        </div>
    )
}

export default SocialIcons3d