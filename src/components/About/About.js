import React from "react";
import './About.css';
import '../CustomAnchor/CustomAnchor'
import CustomAnchor from "../CustomAnchor/CustomAnchor";
import CVfile from './An_Nguyen_CV.pdf'

const About = () =>{
    return (
        <div id="about">
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
                        <CustomAnchor href={CVfile} isCV download>Download CV</CustomAnchor>
                        <CustomAnchor href="#portfolio" isWork>My work</CustomAnchor>
                    </div>
            </div>
        </div>
    )
}

export default About;