import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                        <p>Philadelphia, PA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                    856-298-3095</h4>
                    
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                    zack.hanni@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I enjoy coding, learning, and audio engineering. I am open to discussing new projects and design challenges.</p>
                <div className="social">
                    <FaFacebook
                        size={30} 
                        style={{color: "white", marginRight: "1rem"}}/>
                    <FaLinkedin
                        size={30} 
                        style={{color: "white", marginRight: "1rem"}}/>
                    <FaGithub
                        size={30} 
                        style={{color: "white", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer