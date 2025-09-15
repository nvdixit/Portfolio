import React from 'react'
import { useRef } from 'react';
import useScrollOnDrag from 'react-scroll-ondrag';
import "./ToolLogoBox.css"


const ToolLogoBox = (props) => {
    const ref = useRef();
    const { events } = useScrollOnDrag(ref);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div>
        <div id="ScrollBox" {...events} ref={ref}>
            
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt='missing' />            
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt='missing' />      
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" alt='missing' />          
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-plain-wordmark.svg" alt='missing' />
            <img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt='missing' />   

        </div>

            <div>
                <center>
                    <button id="leftButton" onClick={() => scroll(-500)}><center>←</center></button>
                    &nbsp;&nbsp;
                    <button id="rightButton" onClick={() => scroll(500)}><center>→</center></button>
                </center>
            </div>

        </div>
    );
};

export default ToolLogoBox;
