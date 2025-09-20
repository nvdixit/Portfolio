import React from 'react'
import "./Experience.css"


const Experience = (props) => {
    return (
        <div id='experienceContainer'>
            <div id='companyNameBox'>
                <big>{props.company}</big>
            </div>

            <div id='experienceInterior'>
                <div id='positionNameBox'>
                    <center>{props.position}</center>
                    <center>{props.time}</center>
                </div>

                <div id='experienceDescriptionListBox'>
                    <ul>
                        {props.description.map((line, i) => <li key={i}>
                            <small>{line}</small>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Experience