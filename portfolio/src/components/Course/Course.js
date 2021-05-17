import React from 'react'
import "./Course.css"

function Course(props) {
    return (
        <div id="Course">
            {props.courseName}

            <left>
                <small>  
                    <li>{props.description}</li>
                </small>
            </left>
        </div>
    )
}

export default Course