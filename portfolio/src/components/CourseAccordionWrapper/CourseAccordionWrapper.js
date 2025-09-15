import React from 'react'
import "./CourseAccordionWrapper.css"
import Collapsible from 'react-collapsible'

const CourseAccordionWrapper = (props) => {
    return (
        <Collapsible classParentString='TopicCollapsible'
                     trigger={props.trigger}  transitionTime={300}>
            <small>
                <ul id='ClassList'>
                    {props.description.map((line, i) => <li key={i}>
                        <Collapsible classParentString="CourseCollapsible" trigger={line.title} transitionTime={300}>
                            <ul>
                                <small>{line.description.map((line_two, j) => <li key={j}>{line_two}</li>)}</small>
                            </ul>
                        </Collapsible>

                    </li>)}
                </ul>
            </small>

        </Collapsible>

    )
}

export default CourseAccordionWrapper
