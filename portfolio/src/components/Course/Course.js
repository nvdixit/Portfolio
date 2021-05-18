import React from 'react'
import "./Course.css"

const Course = (props) => {
    return (
        <div id="Course">
            {props.courseName}
            
            <small><small>  
                <li id="InnerText">{props.description}</li>
            </small></small>
        </div>
    )
}

export default Course