import Navbar from './NavigationBar/Navbar'
import ContactForm from './ContactForm/ContactForm'
import Footer from './Footer/Footer'

function Contact() {
    return(
        <main>
            <Navbar/>

            <center>
                <h1>Contact Me</h1>
            </center>
            
            <p>
                <center>
                    Phone: (919) 946-4121 &nbsp; &nbsp; &nbsp; &nbsp; 
                    Email: dixit.v.nikhil@gmail.com
                    
                    <pre/>
                    Questions? Comments? Tips on improving the website? <pre/>
                    Feel free to reach out
                </center>
            </p>

            <p>
                <center>
                    <ContactForm/>
                </center>
            </p>
            
            <Footer/>
        </main>
    )
}

export default Contact