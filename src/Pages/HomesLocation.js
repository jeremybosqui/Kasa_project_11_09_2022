import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import DropDown from "../Components/About_Components/DropDown";
import Avatar from "../Components/Homes_Page_Components/Avatar";
import Tag from "../Components/Homes_Page_Components/Tags"
import Carrousel from "../Components/Homes_Page_Components/Carrousel";
import Banner from "../Components/Banner";
import Rates from "../Components/Homes_Page_Components/Rate_Stars";
//import Rates from "../Components/Rate_Stars";
import "../Styles/HomesLocation.scss"
/*import Footer from "../Components/Footer";*/


export default function LocationPage() {
    //
    const [location, setLocation] = useState({tags:[], rating:'', equipments:[], pictures:[], host:{'name':'', 'picture':''}});
        //
    const { id } = useParams();
        //
    useEffect (function (){
        fetch('/Datas/HomeList.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i=0; i<data.length; i++){
                    if (data[i].id === id){
                        setLocation(data[i])
                    }
                }
            })
    },[id]);

    return (
        <div className="BigContent">
            <Banner />
            <div className="body_location_page">
                <div className="slideshow_location">
                    <Carrousel img={location.pictures}/>
                </div>

                <div className="BigContent_PartOne">

                    <div className="BigContent_Main">

                        <div className="BigContent_TitleHost">
                            <div className="BigContent_TitleHost_Text">
                                <h2 className="">{location.title}</h2>
                                <p className="">{location.location}</p>
                            </div>
                            <div className="BigContent_OwnerPart">
                                    <Avatar name={location.host.name} picture={location.host.picture}/>
                                    <Rates rateNum={location.rating} />
                                    {/* <Rates rateNum={location.rating} /> */}
                                    {/* <RatingStars starType="rating" scaleValue={location.rating} />
                            <RatingStars starType="ratingless" scaleValue={location.ratingless} /> */}
                            </div>
                        </div>

                        <div className="BigContent_Tags">
                            {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                        </div>
                    </div>

                </div>

                <div className="BigContent_PartTwo">
                    <div className="BigContent_PartTwo_Left">
                        <DropDown
                            title="Description"
                            content={location.description}
                        />
                    </div>
                    <div className="BigContent_PartTwo_Right">
                        <DropDown
                            title="Equipement"
                            content={
                                <div>
                                    {location.equipments.map((equipment) => <div key={equipment}>{equipment}</div>)}
                                </div>
                            }
                        />

                    </div>
                </div>

            </div>
        </div>
    );
}


