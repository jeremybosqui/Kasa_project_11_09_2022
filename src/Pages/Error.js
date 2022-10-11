import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import "../Styles/Error404.scss"
//import  { LoremIpsum } from "lorem-ipsum";


function Error () {
    return (
        <div>
            <Banner />
            <div className="MainDiv">
                <div><div className="MainDiv_Four">404</div></div>
                {/*<LoremIpsum p={2} />
            le lorem test ne fonctionne pas il ne s'affiche pas dans la page error
            */}
                <div className="MainDiv_Oups">Oups! La page  que <br className="show"/> vous demandez n'existe pas.</div>
                <Link to="/" style={{
                    marginBottom: "100px",
                    fontSize: "20px"
                }}>Retourner sur la page d'accueil</Link>
            </div>

        </div>
    )
}

export default Error
