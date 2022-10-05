import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";

//import  { LoremIpsum } from "lorem-ipsum";


function Error () {
    return (
        <div>
            <Banner />
            <h1>404</h1>
            {/*<LoremIpsum p={2} />
            le lorem test ne fonctionne pas il ne s'affiche pas dans la page error
            */}
            <p>
                Oups! La page  que vous demandez n'existe pas
            </p>
            <Link to="/"><p>Retourner sur la page d'accueil</p></Link>

        </div>
    )
}

export default Error
