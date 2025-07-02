

export default function Entry(props) {
    // The props parameter is not used in this component, but it can be used to pass
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img.src} className="main-image" alt={props.img.alt} />
            </div>
            <div>
                <img src="./marker.png" alt="marker icon" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Map</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>
                    {props.text}
                </p>

            </div>
        </article>
    )
}