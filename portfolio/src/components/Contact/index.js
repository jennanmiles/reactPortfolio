import React from "react";
import './style.css';

function Contact() {
    return (
        <div id="contact" className="contentWrapper">
            <h2 id="">Contact</h2>
            <form>
                <p className="formLabels">Name:</p>
                <input type="text" name="firstname" />
                <p className="formLabels">Email:</p>
                <input type="text" name="email" />
                <p className="formLabels">Message:</p>
                <textarea rows="4" cols="50" name="comment" form="usrform" value="enter your message..."/>
                <button value="submit">Submit</button>
            </form>
        </div> 
    )
}

export default Contact;