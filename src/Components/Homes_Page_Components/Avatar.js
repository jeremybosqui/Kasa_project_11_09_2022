import React from 'react';
import "../../Styles/Avatar.scss"

function Avatar(props){
    return (

        <div className="MainDivAvatar">
            <div className="MainDivAvatar_Name">
                {/*utilisation de la methode split pour separer le prenom et le nom affiché à coté de l'avatar*/}
                <div>{props.name.split(' ', 1)}</div>
                <div>{props.name.split(' ').pop()}</div>
            </div>
            <div className="MainDivAvatar_Owner">
                <img src={props.picture} alt="picture_owner"></img>
            </div>
        </div>

    )

}

export default Avatar