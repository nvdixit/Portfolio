import React from 'react'
import "./Course.css"

const Course = (props) => {
    return (
        <div id="Course">
            {props.courseName} 
            <small><small>
                <ul id="materialLearned">
                    {props.description.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
            </small></small>
        </div>
    )
}

export default Course