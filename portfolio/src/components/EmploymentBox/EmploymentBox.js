import React from 'react'
import './EmploymentBox.css'

function EmploymentBox(props) {
    return (
        <div id="employmentBox">
            <center>
                <pre/>
                {props.companyName}
                <br/>
                {props.time}
            </center>

            <small>
                <ul id="jobTasks">
                    {props.description.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
            </small>
        </div>
    )
}

export default EmploymentBox