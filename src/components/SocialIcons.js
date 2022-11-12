import React from 'react'
import { FaGithubSquare, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import './SocialIcons.css'


function SocialIcons() {
    return (
        <div>
            <a href='https://github.com/sidharthmahala' target='_blank' rel="noopener noreferrer">
                <FaGithubSquare style={{
                    position: 'fixed',
                    top: '250px',
                    left: '20px',
                }} size='30px'
                />
            </a>
            <a href='https://www.linkedin.com/in/sidharthmahala/' target='_blank' rel="noopener noreferrer">
                <FaLinkedinIn
                    style={{
                        position: 'fixed',
                        top: '310px',
                        left: '20px',
                    }} size='30px'
                />
            </a>

            <a href='sidharthmahala@gmail.com'>
                <FaEnvelope style={{
                    position: 'fixed',
                    top: '370px',
                    left: '20px',}}
                    size='30px' 
                />
            </a>
            <a href='https://twitter.com/MahalaSidharth' target='_blank' rel="noopener noreferrer">
                <FaTwitter style={{
                    position: 'fixed',
                    top: '430px',
                    left: '20px',}}
                    size='30px' 
                />
            </a>
        </div>
    )
}

export default SocialIcons