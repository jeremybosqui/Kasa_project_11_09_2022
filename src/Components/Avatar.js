import React from 'react';
import "../Styles/Avatar.scss"

function Avatar(props){
    return (

        <div className="avatar-container">
            <div className="avatar-name">
                <div>{props.name}</div>
            </div>
            <div className="avatar-main">
                <img src={props.picture} alt="picture_owner"></img>
            </div>
        </div>

    )

}

export default Avatar