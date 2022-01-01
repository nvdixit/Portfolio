import React from 'react';
import emailjs from 'emailjs-com';
import "./ContactForm.css"

export default function ContactForm() {
    //EmailJS call to send email through contact form when Send button is pressed
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, e.target, process.env.REACT_APP_EMAIL_USERID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    }

    return (
        <form id="contactForm" onSubmit={sendEmail}>
            <pre/>
            <div id="contactMe">Contact Me</div> {/* Contact Me title*/}

            <div id="infoContainer">
                {/* Where user inputs their name and email address, name field is the variable name for the EmailJS template (DO NOT CHANGE NAME) */}
                <textarea id="nameBox" type="text" name="from_name" placeholder="Your name"/> <pre/> 
                <textarea id="emailBox" type="email" name="reply_to" placeholder="Your email"/> <pre/>
            </div>

            <textarea id="messageBox" name="message" placeholder="Type your message here"/> <pre/> 

            <input id="sendButton" type="submit" value="Send" />
        </form>
  );
}
