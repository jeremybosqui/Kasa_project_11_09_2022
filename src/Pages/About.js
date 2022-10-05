import React from "react";
import Banner from "../Components/Banner";
import "../Styles/About.scss"
/*import {LoremIpsum} from "lorem-ipsum" ;
* cet import est non fonctionnel dans cette version j'utilise donc le test du lorem directement via implementation
* intégré de l'IDE "generate text"
* */


function About() {
    return (
        <div>
            <Banner />
            <div className="SecndMainDivImg">
                <div className="ClimbTwo"></div>
            </div>
            <h2>About</h2>
            <h1>
                ton pere le luc skywokerler
                {/*test du lorem réussi*/}
                Platea primis gravida tamquam mentitum hendrerit.
                Interdum aliquid tantas agam efficiantur. Dictum vocent regione eloquentiam molestie ei eloquentiam
                electram feugait reformidans.
            </h1>
        </div>
    )
}

export default About
