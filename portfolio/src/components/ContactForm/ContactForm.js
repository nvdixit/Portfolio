import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import "./ContactForm.css"

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            senderName: '',
            senderEmail: '',
            senderSubject: '',
            senderMessage: ''
        };

    }

    setName = (event) => {
        this.setState({ senderName: event.target.value});
    }

    setEmail = (event) => {
        this.setState({ senderEmail: event.target.value});
    }

    setSubject = (event) => {
        this.setState({ senderSubject: event.target.value});
    }

    setMessage = (event) => {
        this.setState({ senderMessage: event.target.value});
    }

    sendEmail = () => {
        // if(this.state.senderName === '' ||
        //    this.state.senderEmail === '' ||
        //    this.state.senderSubject === '' ||
        //    this.state.senderMessage === '') {
        // }

        const userId = process.env.REACT_APP_EMAIL_USERID;
        const service = process.env.REACT_APP_EMAIL_SERVICE;
        const template = process.env.REACT_APP_EMAIL_TEMPLATE;

        emailjs.init(userId);
        emailjs.send(service, template, {
            from_name: this.state.senderName,
            to_name: "Nikhil Dixit",
            message: this.state.senderMessage,
            reply_to: this.state.senderEmail,
        }).then(
            console.log("Email Sent")
        );
    }

    render() {
        return (
            <form id="contactForm">
                <div id="infoContainer">
                    <textarea id = "nameBox" placeholder="Your name" onChange={this.setName}></textarea> <pre/>

                    <div>
                        <div id="contactMe">Contact me</div> 
                        <textarea id="emailBox" placeholder="Your email" onChange={this.setEmail}></textarea>
                    </div> 
                    <pre/>

                    <textarea id="subjectBox" placeholder="Subject" onChange={this.setSubject}></textarea> <pre/>
                </div>
            
                <textarea id="messageBox" placeholder="Type your message here" onChange={this.setMessage}></textarea> <pre/>
                <button id="sendButton" onClick={this.sendEmail}>Send</button>  
            </form>
        )
    }
}