import React from 'react'
import { Link } from 'react-router-dom'
import "./WebpageButton.css"

function WebpageButton(props) {
    return (
        <Link to="/Projects"> 
            <button id="WebpageButton">
                <h3>{props.title}</h3>
            </button>
        </Link>
    )
}

export default WebpageButton