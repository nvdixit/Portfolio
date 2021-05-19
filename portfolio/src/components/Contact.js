import Navbar from './NavigationBar/Navbar'

function Contact() {
    return(
        <main>
            <Navbar oneLink="/" oneName="Home" twoLink="/Projects" twoName="Projects" threeLink="/Hobbies" threeName="Hobbies"/>

            <center>
                <h1>Contact</h1>
            </center>
        </main>
    )
}

export default Contact