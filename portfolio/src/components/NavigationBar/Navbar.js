import {Link} from "react-router-dom"
import "./Navbar.css"
import icon from './profile-pic.png'

function Navbar(props) {
    return (
        <ul id="navbar" margin="0px">
            <li id="navitem"><Link to="/" style={{ textDecoration: 'none', color:"inherit" }}>Home</Link></li>
            <li id="navitem"><Link to="/Projects" style={{ textDecoration: 'none', color:"inherit" }}>Projects</Link></li>
            <li id="navitem"><Link to="/Hobbies" style={{ textDecoration: 'none', color:"inherit"}}>Hobbies</Link></li>
            <li id="navitem"><Link to="/Contact" style={{ textDecoration: 'none', color:"inherit"}}>Contact</Link></li>
            <li id="icon">
                <Link to="/Contact">
                    <img id="picture" src={icon} alt="Icon" height="45px"/>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar