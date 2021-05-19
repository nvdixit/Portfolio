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
                    <ProjectButton projectName="TechStocks" description="An iOS application that tracks company stock prices" hasRepo={true} repoUrl="https://github.com/nvdixit/TechStocks"/>
                    <ProjectButton projectName="Portfolio Website" description="My porfolio website" hasRepo={true}repoUrl="https://github.com/nvdixit/Portfolio"/>
                    <ProjectButton projectName="PackScheduler" description="A college course registration & management system" hasRepo={false}/>
                </center>
            </p>
        </main>
    )
}

export default Projects