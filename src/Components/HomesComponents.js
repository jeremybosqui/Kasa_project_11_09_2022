import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Homes_Components.scss"

function HomesComponents (props) {
return (
        <div>
            <Link className="LocationLinks" to={"/locations/"+props.location.id}>
                <div className="LocationLinks_Card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                    <h5 className="LocationLinks_Title">{props.location.title}</h5>

                </div>
            </Link>
        </div>
)
}

export default HomesComponents
