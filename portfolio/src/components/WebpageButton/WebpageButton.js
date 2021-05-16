import React from 'react'
import "./WebpageButton.css"

function WebpageButton(props) {
    return (
        <button id="WebpageButton">
            <h3>{props.title}</h3>
            <small><small><small>{props.text}</small></small></small>
        </button>
    )
}

export default WebpageButton