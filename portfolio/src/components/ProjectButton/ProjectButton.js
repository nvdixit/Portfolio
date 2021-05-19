import "./ProjectButton.css"

function ProjectButton(props) {
    if(props.hasRepo) {
        return (
            <button id="ProjectButton">
                <center>
                    <div id="ProjectName" onClick={() => {
                        
                    }}>{props.projectName}</div> <pre/>
                    <div id="description">{props.description}</div>
                    <a id="RepoLink"href={props.repoUrl} target="_Blank" rel="noreferrer">Check out the repo!</a>
                </center>
            </button>
        )
    }
    else {
        return (
            <button id="ProjectButton">
            <center>
                <div id="ProjectName" onClick="">{props.projectName}</div> <pre/>
                <div id="description">{props.description}</div>
            </center>
        </button>
        )
    }
}

export default ProjectButton