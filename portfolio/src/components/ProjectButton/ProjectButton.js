import "./ProjectButton.css"
import { Modal } from 'react-responsive-modal';
import {useState} from "react"
import 'react-responsive-modal/styles.css';

function ProjectButton(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const onCloseModal = () => setButtonPopup(false);

    if(props.hasRepo) {
        return (
            <div id="ProjectButtonDiv">
                <Modal open={buttonPopup} onClose={onCloseModal} center>
                    <h2 id="descriptionTitle"><center>{props.description}</center></h2>
                    <h2 id="language"><center>{props.language}</center></h2>
                    <h3><center><a href={props.repoUrl} target="_Blank" rel="noreferrer" id="repoLink">Check out the repo!</a></center></h3>

                    <p>
                        <ul id="projectDescription">
                            {props.technicalSummary.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </p>
                </Modal>

                <button id="ProjectButton" onClick={() => setButtonPopup(true)}>{props.projectName}</button>
            </div>
        )
    }
    else {
        return (
            <div id="ProjectButtonDiv">
                <Modal open={buttonPopup} onClose={onCloseModal} center>
                    <h2 id="descriptionTitle"><center>{props.description}</center></h2>
                    <h2 id="language"><center>{props.language}</center></h2>

                    <p>
                        <ul id="projectDescription">
                            {props.technicalSummary.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </p>
                </Modal>
    
                <button id="ProjectButton" onClick={() => setButtonPopup(true)}>{props.projectName}</button>
            </div>
        )
    }
}

export default ProjectButton