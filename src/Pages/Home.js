import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import HomesComponents from "../Components/HomesComponents";
import "../Styles/Home.scss"
import Footer from "../Components/Footer";




function Home() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/Datas/HomeList.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setLocations(data)
            })
    }, [])

    return (
        <div>
            <Banner />
            <div className="MainDivImg">
                {/*ajout de l'image en scss pour pouvoir la centrer comme sur la maquette*/}
                <div className="ClimbOne"></div>
            </div>
            <h2>Home</h2>
            {/*instancier le rendu visuel des locations en utilisant la methode map qui permet de boucler sur les toutes les locations présente dans le fichier json et je les affiche en important mon composant HomesComponents qui boucle sur les pictures présent dans le fichier json*/}
            <div className="BigBossMain">
                <div className="MainDivHomes">
                    <div className="MainDivHomes_Infos">
                        {
                            locations.map((location) => <HomesComponents key = {location.id} location = {location} />
                            )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}
export default Home