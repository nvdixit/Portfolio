import "./ProjectButton.css"
import DescriptionPopup from "./DescriptionPopup/DescriptionPopup"
import {useState} from "react"

function ProjectButton(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div id="ProjectButtonDiv">
            <DescriptionPopup trigger={buttonPopup} setTrigger={setButtonPopup} 
                                description={props.description} 
                                hasRepo={props.hasRepo} 
                                repoUrl={props.repoUrl}
                                technicalSummary={props.technicalSummary}/>
            <button id="ProjectButton" onClick={() => setButtonPopup(true)}>
                {props.projectName}
            </button>

        </div>
    )
    
}

export default ProjectButton