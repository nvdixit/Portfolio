import Navbar from './NavigationBar/Navbar'

function Hobbies() {
    return(
        <main>
            <Navbar oneLink="/" oneName="Home" twoLink="/Projects" twoName="Projects" threeLink="/Contact" threeName="Contact"/>

            <center>
                <h1>Hobbies</h1>
            </center>
        </main>
    )
}

export default Hobbies