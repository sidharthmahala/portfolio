import React from 'react'
import { FaGithubSquare, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import './SocialIcons.css'


function SocialIcons() {
    return (
        <div>
            <a href='#github'>
                <FaGithubSquare style={{
                    position: 'fixed',
                    top: '250px',
                    left: '20px',
                }} size='30px'
                />
            </a>
            <a href='#linkedIn'>
                <FaLinkedinIn
                    style={{
                        position: 'fixed',
                        top: '310px',
                        left: '20px',
                    }} size='30px'
                />
            </a>

            <a href='#email'>
                <FaEnvelope style={{
                    position: 'fixed',
                    top: '370px',
                    left: '20px',}}
                    size='30px' 
                />
            </a>
            <a href='#twitter'>
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