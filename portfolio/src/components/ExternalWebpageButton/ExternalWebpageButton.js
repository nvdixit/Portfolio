import React from 'react'
import './ExternalWebpageButton.css'
import gitHub from "./GitHub-Mark-Light-120px-plus.png"
import linkedin from "./LinkedinLogo.png"

function ExternalWebpageButton(props) {
    if(props.webpage === "GitHub") {
        return (
            <a href={props.url} target="_blank" rel="noreferrer" id="mainLink">
                <button id="ExternalWebpageButton">
                    <img src={gitHub} alt="GitHub"/>
                </button>
            </a>
        )
    }
    else {
        return (
            <a href={props.url} target="_blank" rel="noreferrer" id="mainLink">
                <button id="ExternalWebpageButton">
                    <img src={linkedin} alt="Linkedin"/>
                </button>
            </a>
        )
    }
}

export default ExternalWebpageButton