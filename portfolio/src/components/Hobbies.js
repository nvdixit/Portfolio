import HobbyButton from './HobbyButton/HobbyButton'
import Navbar from './NavigationBar/Navbar'

import carOne from "./HobbyButton/Photos/CarPhoto-1.JPG"
import carTwo from "./HobbyButton/Photos/CarPhoto-2.JPG"
import carThree from "./HobbyButton/Photos/CarPhoto-3.JPG"
import carFour from "./HobbyButton/Photos/CarPhoto-4.JPG"

import spaceOne from "./HobbyButton/Photos/Space-1.JPG"
import spaceTwo from "./HobbyButton/Photos/Space-2.JPG"
import spaceThree from "./HobbyButton/Photos/Space-3.JPG"

import bakingOne from "./HobbyButton/Photos/Baking-1.JPG"
import bakingTwo from "./HobbyButton/Photos/Baking-2.JPG"
import bakingThree from "./HobbyButton/Photos/Baking-3.JPG"
import Footer from './Footer/Footer'

function Hobbies() {
    return(
        <main>
            <Navbar/>

            <center>
                <h1>Hobbies</h1>

            <p>
                What I like to do for fun
            </p>

            <p>
                    <HobbyButton title="Cars" description="I've been a huge car enthusiast since I was 13 years old. 
                                                            The power and engineering of these machines fascinate me, 
                                                            and I love learning more about them at car shows. All photos are pre-covid"
                                                            images={[carOne, carTwo, carThree, carFour]}/>

                    <HobbyButton title="Astronomy" description="I. Love. Space. Capturing the cosmos and the physics of the 
                                                                universe with my telescope and camera is thrilling." 
                                                                images={[spaceOne, spaceTwo, spaceThree]}/>

                    <HobbyButton title="Baking" description="Like many people, I took up baking during the pandemic. 
                                                            What started as a fun way to relax and relieve stress quickly became one of my favorite pastimes." 
                                                            images={[bakingOne, bakingTwo, bakingThree]}/>
            </p>
            </center>
            
            <Footer/>
        </main>
    )
}

export default Hobbies