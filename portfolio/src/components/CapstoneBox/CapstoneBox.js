import React from 'react'
import { Modal } from 'react-responsive-modal';
import {useState} from "react"
import 'react-responsive-modal/styles.css';

import highLevelDesign from './Images/High Level Design.png'
import ncsuLogo from './Images/NCSULogo.png'
import process from './Images/RequestStateMachine.png'

import "./CapstoneBox.css"

function CapstoneBox() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const onCloseModal = () => setButtonPopup(false);

    return (
        <div id='capstoneBox'>
            <Modal classNames={{overlay: 'customOverlay', modal: 'customModal'}} open={buttonPopup} onClose={onCloseModal} center>
                <div id='capstoneBoxModalContent'>
                    <center>      
                        <h2>A software system that manages changes to AWS environments</h2>
                        <h4>MongoDB, Spring Boot, and React</h4>
                    </center>

                    <ul>
                        <li>Worked with Cisco DevOps to build an AWS change management application</li>
                        <li>Led a team of 5 CS seniors to create a cloud change process for Cisco developers to follow</li>
                        <li>Used AWS CloudTrail, Simple Queue Service, Simple Notification Service, and EventBridge to track and filter cloud activity in an AWS environment</li>
                        <li>Built system that notifies appropriate points of contact upon unauthorized cloud change</li>
                        <li>Request: A request to modify the cloud envrionment in some way (create a new EC2 instance, delete an S3 bucket, etc.)</li>
                    </ul>

                    <h3>The Process</h3>
                    <center>
                        <img src={process} alt="process" width='90%'></img>
                    </center>

                    <h3>Application High Level Design</h3>
                    <center>
                        <img src={highLevelDesign} alt="highleveldesign" width='90%'></img>
                    </center>

                    <small>*Diagrams and project completed with the help of NC State University computer science Spring 2023 Senior Design Center Team 10. Shared here with permission 
                    from NC State University and Cisco.</small>
                </div>
            </Modal>

            <button id='capstoneBoxButton' onClick={() => setButtonPopup(true)}>
                AWS Environment Change Management
                <br/>
                <div id='buttonGraphic'>
                    &nbsp;<img id='ncsuLogo' src={ncsuLogo} alt="ncsulogo"></img>&nbsp;sponsored by Cisco
                </div>
            </button>  
        </div>
    );
}

export default CapstoneBox;