import "./DescriptionPopup.css"

function DescriptionPopup(props) {
    if(props.hasRepo) {
        return (props.trigger) ? (
            <div id="PopupWindow">
                {props.children}
                {props.description}
                <button onClick={() => props.setTrigger(false)}>Close</button><pre/>
                <a href={props.repoUrl} target="_Blank" rel="noreferrer">Check out the repo!</a>
            </div>
        ) : ""
    }
    else {
        return (props.trigger) ? (
            <div id="PopupWindow">
                {props.children}
                {props.description}
                <button onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        ) : ""
    }
}

export default DescriptionPopup