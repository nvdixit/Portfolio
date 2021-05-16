import React from 'react'
import './ExternalWebpageButton.css'

function ExternalWebpageButton(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            <button id="ExternalWebpageButton"></button>
        </a>
    )
}

export default ExternalWebpageButton