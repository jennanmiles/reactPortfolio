import React from "react";
import './style.css';

function Work() {
    return(
        <div id="work" className="contentWrapper portfolio">
            <h2 id="">Work</h2>
            <div className="portfolioWrapper">
               
                <a className="portfolioPiece" href="https://visitgayusa.com/">
                    <div className="portText">Visit Gay USA</div>
                </a>
                <a className="portfolioPiece" href="https://grandcanyonwest.com/">
                    <div className="portText">Grand Canyon West</div>
                </a>
                <a className="portfolioPiece" href="https://tucsonguide.com/">
                    <div className="portText">Tucson Guide</div>
                </a> 
                              
                <a className="portfolioPiece" href="https://secure-bastion-03140.herokuapp.com/">
                    <div className="portText">Safe520 App</div>
                </a>
                <a className="portfolioPiece" href="https://intense-ravine-40516.herokuapp.com/">
                    <div className="portText">Burger Logger</div>
                </a>
                <a className="portfolioPiece" href="https://jennanmiles.github.io/thirdProject/">
                    <div className="portText">Password Generator</div>
                </a>
               
                <a className="portfolioPiece" href="https://fabybacenelson.github.io/Project-One/index.html">
                    <div className="portText">Personal Kanban Board</div>
                </a>
                <a className="portfolioPiece" href="https://jennanmiles.github.io/fifthProject/">
                    <div className="portText">Day Scheduler App</div>
                </a>
                <a className="portfolioPiece" href="https://jennanmiles.github.io/fourthProject/">
                    <div className="portText">Javascript Quiz</div>
                </a>
            </div>
        </div>        
    )
}

export default Work;