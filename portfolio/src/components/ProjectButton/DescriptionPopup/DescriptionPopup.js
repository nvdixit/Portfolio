import "./DescriptionPopup.css"

function DescriptionPopup(props) {
    const popup_size = 600;
    const left = (window.innerWidth - popup_size) / 2;
    const top = (window.innerHeight - popup_size) / 2;

    if(props.hasRepo) {
        return (props.trigger) ? (
            <div id="PopupWindow" style={{top: top, left:left}}>
                <button onClick={() => props.setTrigger(false)} id="closeButton">x</button>
                <pre/><pre/>
                {props.children}
                <h3 id="popupHeader">{props.description}</h3>
                <pre/>

                <ul id="projectDescription">
                    {props.technicalSummary.map((point, i) => <li key={i}>{point}</li>)}
                </ul>

                <a href={props.repoUrl} target="_Blank" rel="noreferrer" id="repoLink">Check out the repo!</a> 
            </div>
        ) : ""
    }
    else {
        return (props.trigger) ? (
            <div id="PopupWindow" style={{top: top, left:left}}>
                <button onClick={() => props.setTrigger(false)} id="closeButton">x</button>
                <pre/><pre/>
                {props.children}
                <h3 id="popupHeader">{props.description}</h3>
                <pre/>

                <ul id="projectDescription">
                    {props.technicalSummary.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </div>
        ) : ""
    }
}

export default DescriptionPopup