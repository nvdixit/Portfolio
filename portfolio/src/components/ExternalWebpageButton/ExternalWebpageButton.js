import React from 'react'
import './ExternalWebpageButton.css'
import gitHub from "./GitHub-Mark-Light-120px-plus.png"
import linkedin from "./LinkedinLogo.png"

function ExternalWebpageButton(props) {
    if(props.webpage === "GitHub") {
        return (
            <a href={props.url} target="_blank" rel="noreferrer" id="mainLink">
                    <button id="ExternalWebpageButton"></button>
                    <img src={gitHub} alt="GitHub"/>
                </a>
        )
    }
    else {
        return (
            <a href={props.url} target="_blank" rel="noreferrer" id="mainLink">
                    <button id="ExternalWebpageButton"></button>
                    <img src={linkedin} alt="Linkedin"/>
            </a>
        )
    }
}

export default ExternalWebpageButton