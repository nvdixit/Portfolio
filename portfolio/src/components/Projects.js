import {Link} from "react-router-dom"

function Projects() {
    return (
        <main>
            <ul id="navbar">
                <li id="navitem"><Link to={"/"} style={{ textDecoration: 'none', color:"inherit" }}>Home</Link></li>
                <li id="navitem"><Link to={"/Hobbies"} style={{ textDecoration: 'none', color:"inherit" }}>Hobbies</Link></li>
                <li id="navitem"><Link to={"/Contact"} style={{ textDecoration: 'none', color:"inherit"}}>Contact</Link></li>
            </ul>
            <h1>Projects Webpage</h1>
        </main>
    )
}

export default Projects