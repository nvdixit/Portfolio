import HobbyButton from './HobbyButton/HobbyButton'
import Navbar from './NavigationBar/Navbar'

function Hobbies() {
    return(
        <main>
            <Navbar/>

            <center>
                <h1>Hobbies</h1>
            </center>

            <p>
                <center>
                    What I like to do for fun.
                </center>
            </p>

            <HobbyButton/>
        </main>
    )
}

export default Hobbies