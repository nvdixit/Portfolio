import "./HobbyButton.css"

function HobbyButton(props) {
    return (
        <div id="hobbyButton">
            <div id="hobbyText">
                <h4>{props.title}</h4>
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
        </div>
    )
}

export default HobbyButton