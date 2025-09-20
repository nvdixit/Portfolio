import "./Project.css"
import { Modal } from 'react-responsive-modal';
import {useState} from "react"
import 'react-responsive-modal/styles.css';
import gitHub from "./GitHub-Mark-Light-64px.png"

import capstoneImageOne from "../Images/High Level Design.png"
import capstoneImageTwo from "../Images/RequestStateMachine.png"

function Project(props) {
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
                                <img id='stackImage' src={stackImageURL} />
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
                                <img id='githubImage' src={gitHub} />
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
                                <img id='stackImage' src={stackImageURL} />
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
                                <div id='capstoneImageOneBox'>
                                    The Design <br />
                                    <img id='capstoneImageImg' src={capstoneImageOne}></img>
                                </div>

                                <div id='capstoneImageTwoBox'>
                                    The Process <br />
                                    <img id='capstoneImageImg' src={capstoneImageTwo}></img>
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