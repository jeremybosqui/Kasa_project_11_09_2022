
import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Homes_Components.scss"

function HomesComponents (props) {
    return (
        <div>
            <Link className="LocationLinks" to={"/locations/"+props.location.id}>

                <div className="LocationLinks_Card" style={

                    { backgroundImage:`url(${props.location["cover"]})`}
                }>
                    <p className="LocationLinks_Title">{props.location.title}</p>
                </div>
            </Link>
        </div>
)
}

export default HomesComponents
