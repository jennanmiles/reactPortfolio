import React from "react";
import './style.css';

function Skills() {
    return (
        <div id="skills" className="contentWrapper">
            <h2>Skills</h2>
            <div className="skillWrapper">
                <div className="skillRow">
                    <div className="title">HTML</div>
                    <div className="meter">
                        <span className="teal" 
                        style={{width: '90%'}}></span>
                    </div>
                </div>
                <div className="skillRow">
                    <div className="title">CSS/SCSS</div>
                    <div className="meter">
                        <span className="tea" 
                        style={{width: '95%'}}></span>
                    </div>
                </div>
                <div className="skillRow">
                    <div className="title">JS/JQuery</div>
                    <div className="meter">
                        <span className="mocha" 
                        style={{width: '35%'}}></span>
                    </div>
                </div>
                <div className="skillRow">
                    <div className="title">WordPress</div>
                    <div className="meter">
                        <span className="green" 
                        style={{width: '65%'}}></span>
                    </div>
                </div>
                <div className="skillRow">
                    <div className="title">PHP</div>
                    <div className="meter">
                        <span className="mauve" 
                        style={{width: '15%'}}></span>
                    </div>
                </div>  
                <div className="skillRow">
                    <div className="title">Responsive Design</div>
                    <div className="meter">
                        <span className="gray" 
                        style={{width: '85%'}}></span>
                    </div>
                </div> 
                <div className="skillRow">
                    <div className="title">Adobe CC</div>
                    <div className="meter">
                        <span className="ruby" 
                        style={{width: '90%'}}></span>
                    </div>
                </div>                
            </div>
        </div>  
    )
}

export default Skills;