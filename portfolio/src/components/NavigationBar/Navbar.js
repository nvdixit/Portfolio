import {Link} from "react-router-dom"
import "./Navbar.css"
import icon from './profile-pic.png'

function Navbar(props) {
    return (
        <ul id="navbar" margin="0px">
            <li id="navitem"><Link to={props.oneLink} style={{ textDecoration: 'none', color:"inherit" }}>{props.oneName}</Link></li>
            <li id="navitem"><Link to={props.twoLink} style={{ textDecoration: 'none', color:"inherit" }}>{props.twoName}</Link></li>
            <li id="navitem"><Link to={props.threeLink} style={{ textDecoration: 'none', color:"inherit"}}>{props.threeName}</Link></li>
            <li id="photoIcon">
                <img id="picture" src={icon} alt="Icon" height="45px"/>
            </li>
        </ul>
    )
}

export default Navbar