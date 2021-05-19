import Navbar from "./NavigationBar/Navbar"
import ProjectButton from "./ProjectButton/ProjectButton"

function Projects() {
    return (
        <main>
            <Navbar oneLink="/" oneName="Home" twoLink="/Hobbies" twoName="Hobbies" threeLink="/Contact" threeName="Contact"/>

            <center><h1>Projects</h1></center>

            <p>
                <center>
                    Programming projects I've used to help myself learn.
                </center>
            </p>

            <p>
                <center>
                    <ProjectButton projectName="TechStocks"/>
                    <ProjectButton projectName="Portfolio Website"/>
                </center>
            </p>
        </main>
    )
}

export default Projects