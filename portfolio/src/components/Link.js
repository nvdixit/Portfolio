import React from "react"

const Link = (props) => {
    return (
        <a href={props.url} target="_blank" rel="noreferrer"> {props.hyperlinkText} </a>
    )
}

export default Link