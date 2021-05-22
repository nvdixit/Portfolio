import "./HobbyButton.css"

function HobbyButton(props) {
    return (
        <button id="hobbyButton">
            <div id="hobbyText">
                {props.title}
                <pre/>
                <div id="Description">
                    {props.description}
                </div>
            </div>

            <div id="photos">
                <ul id="carPhotos">
                    {props.images.map((image, i) => <li key={i}><img id="picture" src={image} alt="Car" width="350px"/></li>)}
                </ul>
            </div>
        </button>
    )
}

export default HobbyButton