import React from 'react';
import emailjs from 'emailjs-com';
import "./ContactForm.css"

export default function ContactForm() {

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
            <div id="contactMe">Contact Me</div> 

            <div id="infoContainer">
                <input id="nameBox" type="text" name="user_name" placeholder="Your name"/> <pre/>
                <input id="emailBox" type="email" name="user_email" placeholder="Your email"/> <pre/>
            </div>

            <textarea id="messageBox" name="message" placeholder="Type your message here"/> <pre/>

            <input id="sendButton" type="submit" value="Send" />
        </form>
  );
}
