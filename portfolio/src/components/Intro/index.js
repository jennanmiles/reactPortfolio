import React from "react";
import './style.css';
import FontAwesome from 'react-fontawesome';
import headshot from './pic.jpg';

function Intro() {
    return (
        <div id="about" className="contentWrapper firstOne">
            <img alt="headshot" className="myPhoto" src={headshot} />
            <h1>Hey there!<br /> My name is <span>Jenna</span></h1>
            
            <p>I am a web developer at a travel marketing firm in Tucson. I graduated from the University of Arizona with a BFA in graphic design in 2012. After 5 years in the industry, I fell in love with coding switched careers. I began as a front-end web developer and continue to grow my skillset with hopes of becoming full-stack.</p>
            
            <p>Outside of work, you&rsquo;ll find me running, biking, swimming, and cooking. I like a good non-fiction book paired with a cheap glass of red wine. I play chess with my spouse and rarely win.</p>

            <div className="iconWrapper">
                <a href="https://github.com/jennanmiles/">
                    <FontAwesome 
                    className="fab fa-github"
                    name="fab fa-github"/>
                </a>
                <a href="https://www.linkedin.com/in/jenna-miles/">
                    <FontAwesome 
                    className="fab fa-linkedin" 
                    name="fab fa-linkedin"/>
                </a>
                <a href="assets/images/resume.pdf">
                    <FontAwesome 
                    className="fas fa-file"
                    name="fas fa-file"/>
                </a>
                <a href="mailto:jennanmiles@gmail.com?subject=Portfolio Contact">
                    <FontAwesome 
                    className="fas fa-paper-plane"
                    name="fas fa-paper-plane"/>
                </a>
            </div>
        </div>
    )
}

export default Intro;