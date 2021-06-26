import React from 'react'
import "./Course.css"

const Course = (props) => {
    return (
        <button id="Course">
            <div id="courseDesignation">{props.courseDesignation}</div> 
            <pre/>
            <div id="courseName">{props.courseName} </div>

            <small><small>
                <ul id="materialLearned">
                    {props.description.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
            </small></small>
        </button>
    )
}

export default Course