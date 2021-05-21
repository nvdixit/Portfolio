import "./ContactForm.css"

function ContactForm() {
    return (
        <div id="contactForm">
            <div id="infoContainer">
                <textarea id = "nameBox" placeholder="Your name"></textarea> <pre/>
                <div>
                    <div id="contactMe">Contact me</div> 
                    <textarea id="emailBox" placeholder="Your email"></textarea>
                </div> 
                <pre/>
                <textarea id="subjectBox" placeholder="Subject"></textarea> <pre/>
            </div>
            
            <textarea id="messageBox" placeholder="Type your message here"></textarea> <pre/>
            <button id="sendButton">Send</button>  
        </div>
    )
}

export default ContactForm