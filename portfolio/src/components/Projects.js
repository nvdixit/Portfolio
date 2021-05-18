import {Link} from "react-router-dom"

import ProjectButton from "./ProjectButton/ProjectButton"

function Projects() {
    return (
        <main>
            <ul id="navbar">
                <li id="navitem"><Link to={"/"} style={{ textDecoration: 'none', color:"inherit" }}>Home</Link></li>
                <li id="navitem"><Link to={"/Hobbies"} style={{ textDecoration: 'none', color:"inherit" }}>Hobbies</Link></li>
                <li id="navitem"><Link to={"/Contact"} style={{ textDecoration: 'none', color:"inherit"}}>Contact</Link></li>
            </ul>

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