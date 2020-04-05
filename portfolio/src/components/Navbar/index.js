import React from "react";
import './style.css';

function Navbar() {
    return (
        <nav className="navBar">
            <a className="logo" href="index.html">Jenna Miles</a>          
            <ul>
                <li><a className="navItem" href="#about">About</a></li>
                <li><a className="navItem" href="#skills">Skills</a></li>
                <li><a className="navItem" href="#work">Work</a></li>
                <li><a className="navItem" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;