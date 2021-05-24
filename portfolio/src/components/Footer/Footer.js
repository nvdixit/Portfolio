import "./Footer.css"
import ReactLogo from "./ReactLogo.png"

function Footer() {
    return (
        <footer id="Footer">
            Powered by React &nbsp;
            <img src={ReactLogo} alt="React Logo" height="25px"/>
        </footer>
    )
}

export default Footer