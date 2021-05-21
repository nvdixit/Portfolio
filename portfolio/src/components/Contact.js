import Navbar from './NavigationBar/Navbar'
import ContactForm from './ContactForm/ContactForm'

function Contact() {
    return(
        <main>
            <Navbar oneLink="/" oneName="Home" twoLink="/Projects" twoName="Projects" threeLink="/Hobbies" threeName="Hobbies"/>

            <center>
                <h1>Contact</h1>
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
        </main>
    )
}

export default Contact