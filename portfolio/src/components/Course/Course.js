import React from 'react'
import './Course.css'


export default function Course(props) {
    return (
        <div id='courseBox'>
            <div id='numberBox'>
                {props.number}
            </div>
            
            <div id='nameDescrBox'>
                <div id='courseNameBox'>            
                    {props.name}
                </div>

                <div id='descriptionBox'>
                    <small ><small>
                    <ul>
                        {props.description.map((line, j) => <li key={j}>
                            {line}
                        </li>)}
                    </ul>
                    </small></small>
                </div>
            </div>
        </div>
    );
}