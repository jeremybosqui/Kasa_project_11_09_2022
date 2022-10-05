import React from 'react';
import Dropdown from "../Components/DropDown";
import "../Styles/About.scss"
import Banner from "../Components/Banner";
import {stockData} from "../Components/AboutText";
import Footer from "../Components/Footer";


function About() {

    return (
        <div>
            <Banner />
            <div className="MainDivImg">
                {/*ajout de l'image en scss pour pouvoir la centrer comme sur la maquette*/}
                <div className="ClimbTwo"></div>
            </div>
            {/*************************************************************************************/}
            <div>
                {/*utilisation de map pour afficher les elements recuperer dans le fichier json créer
                via la const stockdata*/}
                {stockData.map((data, key) => {
                    return (
                        <div key={key} className="center">
                            {/*ajout de key pour éviter les problèmes re render et fix issue dans la console*/}
                            <div  className="MainDivAbout" >
                                <div  className="MainDivAbout_MainContainer">
                                    <div className="MainDivAbout_DropdownContainer"  >
                                        <Dropdown
                                            title="Fiabilité"
                                            content={data.fiabilite}
                                        />
                                    </div>
                                    <div className="MainDivAbout_DropdownContainer" >
                                        <Dropdown
                                            title="Respect"
                                            content={data.respect}
                                        />
                                    </div>
                                    <div className="MainDivAbout_DropdownContainer" >
                                        <Dropdown
                                            title="Service"
                                            content={data.service}
                                        />
                                    </div>
                                    <div className="MainDivAbout_DropdownContainer">
                                        <Dropdown
                                            title="Sécurité"
                                            content={data.securite}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>

    );
}

export default About;
