import React from 'react'
import "./SkillList.css"

function SkillList(props) {
    return (
        <div id="skillList">
            {props.listTitle} 
            <small><small>
                <ul id="skills">
                    {props.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </small></small>
        </div>
    )
}

export default SkillList