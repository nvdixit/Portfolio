import "./Project.css"
import { Modal } from 'react-responsive-modal';
import {useState} from "react"
import 'react-responsive-modal/styles.css';
import gitHub from "./GitHub-Mark-Light-64px.png"

import capstoneImageOne from "../Images/High Level Design.png"
import capstoneImageTwo from "../Images/RequestStateMachine.png"

function Project(props) {
    const [buttonOnePopup, setButtonOnePopup] = useState(false);
    const onCloseModalOne = () => setButtonOnePopup(false);

    const [buttonTwoPopup, setButtonTwoPopup] = useState(false);
    const onCloseModalTwo = () => setButtonTwoPopup(false);

    if(props.hasRepo) {
        return (
            <div id="projectDiv">
                <div id='projectTitleBox'>
                    <big><big>{props.projectName}</big></big>
                </div>
                
                <div id='projectInternal'>
                    <div id='projectSubtitle'>
                        {props.description}
                    </div>

                    <div id='projectTechnologiesImageBox'>
                        <ul id='projectImagesList'>
                            {props.stackImages.map((stackImageURL, i) => <li id='stackImageli' key={i}>
                                <img id='stackImage' src={stackImageURL} alt='imgOne'/>
                            </li>)}
                        </ul>
                    </div>

                    <div id='projectDescriptionListBox'>
                        <small>
                        <ul>
                            {props.technicalSummary.map((line, i) => 
                            <li>
                                {line}
                            </li>)}
                        </ul>
                        </small>
                    </div>

                    <div id='repoLinkBox'>
                        <a href={props.repoUrl} target="_blank" rel="noreferrer" id="mainLink">
                            <button id='repoButton'>
                                <img id='githubImage' src={gitHub} alt='imgOne'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.capstone) {
        return (
            <div id="projectDiv">

                <Modal classNames={{overlay: 'customOverlay', modal: 'customModal'}} open={buttonOnePopup} onClose={onCloseModalOne} center={true} >
                    <center><img id='modalImg' src={capstoneImageOne} alt='imgOne'/></center>
                </Modal>

                <Modal classNames={{overlay: 'customOverlay', modal: 'customModal'}} open={buttonTwoPopup} onClose={onCloseModalTwo} center={true} >
                    <center>
                        <p>Request: A request to modify the cloud envrionment in some way (create a new EC2 instance, delete an S3 bucket, etc.)</p>
                        <img id='modalImg' src={capstoneImageTwo} alt='imgOne'/>
                    </center>
                </Modal>

                <div id='projectTitleBox'>
                    <big><big>{props.projectName}</big></big>
                </div>
                
                <div id='projectInternal'>
                    <div id='projectSubtitle'>
                        {props.description}
                    </div>

                    <div id='projectTechnologiesImageBox'>
                        <ul id='projectImagesList'>
                            {props.stackImages.map((stackImageURL, i) => <li id='stackImageli' key={i}>
                                <img id='stackImage' src={stackImageURL} alt='imgOne'/>
                            </li>)}
                        </ul>
                    </div>

                    <div id='projectDescriptionListBoxNoStack'>
                        <small>
                        <ul>
                            {props.technicalSummary.map((line, i) => 
                            <li>
                                {line}
                            </li>)}
                        </ul>
                        </small>
                    </div>

                    <div id='CapstoneImageBox'>
                        <center>
                            <div id='capstoneInternalImageWrapper'>
                                <div id='capstoneImageTwoBox'>
                                    The Process <br />
                                    <button id='popupButton' onClick={() => setButtonTwoPopup(true)}><img id='capstoneImageImg' src={capstoneImageTwo} alt='imgOne'/></button>
                                </div>

                                <div id='capstoneImageOneBox'>
                                    The Design <br />
                                    <button id='popupButton' onClick={() => setButtonOnePopup(true)}><img id='capstoneImageImg' src={capstoneImageOne} alt='imgOne'/></button>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="projectDiv">
                <div id='projectTitleBox'>
                    <big><big>{props.projectName}</big></big>
                </div>
                
                <div id='projectInternal'>
                    <div id='projectSubtitle'>
                        {props.description}
                    </div>

                    <div id='projectDescriptionListBoxNoStack'>
                        <small>
                        <ul>
                            {props.technicalSummary.map((line, i) => 
                            <li>
                                {line}
                            </li>)}
                        </ul>
                        </small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project