import React from 'react'
import { useRef } from 'react';
import useScrollOnDrag from 'react-scroll-ondrag';
import Slider from 'react-infinite-logo-slider'
import "./ToolLogoBox.css"


const ToolLogoBox = () => {
    return (
        <Slider width="12vw" duration={90} pauseOnHover={false} blurBorders={false} blurBorderColor={'#fff'}>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt='missing' /></Slider.Slide>            
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt='missing' /></Slider.Slide>      
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" alt='missing' /></Slider.Slide>          
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-plain-wordmark.svg" alt='missing' /></Slider.Slide>
            <Slider.Slide class="scroller-item-slide"><img class="scroller-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt='missing' /></Slider.Slide>   
        </Slider>
    )
}

export default ToolLogoBox;
