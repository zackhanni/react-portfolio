import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFile, FaDribbble } from "react-icons/fa"

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
                    <Link to="tel:8562983095"><h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                    856-298-3095</h4></Link>
                    
                </div>
                <div className="email">
                    <Link to="mailto:zack.hanni@gmail.com"><h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                    zack.hanni@gmail.com</h4></Link>
                </div>

                <div className="resume">
                    <Link to="../assets/zack-hanni-resume.pdf" target="_blank"><h4><FaFile size={20} style={{color: "white", marginRight: "2rem"}}/>
                    Zack's resume</h4></Link>
                </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I enjoy coding, learning, and audio engineering. I am open to discussing new projects and design challenges.</p>
                <div className="social">
                    <Link to="https://www.linkedin.com/in/zackhanni/" target="_blank"><FaLinkedin
                        size={30} 
                        style={{color: "white", marginRight: "1rem"}}/></Link>
                    <Link to="https://github.com/zackhanni" target="_blank"><FaGithub
                        size={30} 
                        style={{color: "white", marginRight: "1rem"}}/></Link>
                    <Link to="https://dribbble.com/zackhanni" target="_blank"><FaDribbble
                        size={30} 
                        style={{color: "white", marginRight: "1rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer