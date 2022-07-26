import React from "react";
import './About.css'

const About = () =>{
    return (
        <div className="about">
            <div className="about-head">
                <h1>About me</h1>
                <p>Get to know me</p>
            </div>
            <div className="about-body">
                <img src="" alt="An Nguyen" id="my-img"/>

                    <div className="title">
                        Content title
                    </div>
                    <div className="content">
                        Main content
                    </div>
                    <div className="my-info">
                        <p className="name">Name:</p>
                        <p className="email">Email:</p>
                        <p className="age">Age:</p>
                        <p className="address">Address:</p>
                        <a href="#about" className="download-btn">Download CV</a>
                        <a href="#about" className="work-btn">My work</a>
                    </div>
            </div>
        </div>
    )
}

export default About;