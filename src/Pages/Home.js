import React from "react";
import Banner from "../Components/Banner";
import "../Styles/Home.scss"


function Home() {
    return (
        <div>
            <Banner />
            <div className="MainDivImg">
                {/*ajout de l'image en scss pour pouvoir la centrer comme sur la maquette*/}
                <div className="ClimbOne"></div>
            </div>
            <h2>Home</h2>
        </div>
    )

}
export default Home
