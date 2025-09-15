import React from 'react'
import "./Accordion.css"
import Collapsible from 'react-collapsible'

const Accordion = (props) => {
    return (
        <center>
        <Collapsible contentContainerTagName="Collapsible" trigger={props.trigger} transitionTime={300}>
            <small>
            <div id='companyTimeBox'>
                {props.time}
            </div>
            </small>
            
        <small><small>
            <ul>
                {props.description.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
        </small></small>
        </Collapsible>
        </center>

    )
}

export default Accordion