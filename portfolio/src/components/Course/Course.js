import React from 'react'
import "./Course.css"

const Course = (props) => {
    return (
        <div id="Course">
            <center>
                <div id="courseDesignation">{props.courseDesignation}</div> 
                <pre/>
                <div id="courseName">{props.courseName} </div>

                <small><small>
                    <ul id="materialLearned">
                        {props.description.map((line, i) => <li key={i}>{line}</li>)}
                    </ul>
                </small></small>
            </center>


        </div>
    )
}

export default Course