import "./DescriptionPopup.css"

function DescriptionPopup(props) {
    const left = (window.innerWidth - 600) / 2;
    const top = (window.innerHeight - 600) / 2;

    if(props.hasRepo) {
        return (props.trigger) ? (
            <div id="PopupWindow" style={{top: top, left:left}}>
                <button onClick={() => props.setTrigger(false)} id="closeButton">x</button>
                <pre/>
                {props.children}
                {props.description}
                <pre/>
                <a href={props.repoUrl} target="_Blank" rel="noreferrer" id="repoLink">Check out the repo!</a>
            </div>
        ) : ""
    }
    else {
        return (props.trigger) ? (
            <div id="PopupWindow" style={{top: top, left:left}}>
                <button onClick={() => props.setTrigger(false)} id="closeButton">x</button>
                <pre/>
                {props.children}
                {props.description}
            </div>
        ) : ""
    }
}

export default DescriptionPopup