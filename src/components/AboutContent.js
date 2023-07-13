import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'
import TopImage from "../assets/react1.jpg"
import BottomImage from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who is Zack?</h1>
            <p>Zack is a goofy nerd</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={TopImage} className="img" alt="Work Demo" />
                </div>

                <div className="img-stack bottom">
                    <img src={BottomImage} className="img" alt="Work Demo 2" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent;