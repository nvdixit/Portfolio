import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <ul id="navbar" margin="0px">
            <Link to="/" style={{ textDecoration: 'none', color:"inherit" }}><li id="navitem">Home</li></Link>
            <Link to="/Projects" style={{ textDecoration: 'none', color:"inherit" }}><li id="navitem">Projects</li></Link>
            <Link to="/Hobbies" style={{ textDecoration: 'none', color:"inherit" }}><li id="navitem">Hobbies</li></Link>
            <Link to="/Contact" style={{ textDecoration: 'none', color:"inherit" }}><li id="navitem">Contact</li></Link>
        </ul>
    )
}

export default Navbar