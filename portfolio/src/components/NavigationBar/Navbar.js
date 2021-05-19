import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar(props) {
    return (
        <ul id="navbar">
                <li id="navitem"><Link to={props.oneLink} style={{ textDecoration: 'none', color:"inherit" }}>{props.oneName}</Link></li>
                <li id="navitem"><Link to={props.twoLink} style={{ textDecoration: 'none', color:"inherit" }}>{props.twoName}</Link></li>
                <li id="navitem"><Link to={props.threeLink} style={{ textDecoration: 'none', color:"inherit"}}>{props.threeName}</Link></li>
        </ul>
    )
}

export default Navbar