import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import DropDown from "../Components/About_Components/DropDown";
import Avatar from "../Components/Avatar";
import Tag from "../Components/Tags"
import Carrousel from "../Components/Carrousel";
import Banner from "../Components/Banner";
import Rates from "../Components/Rate_Stars";
//import Rates from "../Components/Rate_Stars";

import "../Styles/PageLocation.scss"
import Footer from "../Components/Footer";


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

    //const widthDiv = {width : '50%'}

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
                            <div className="">
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

                <div className="main-container-accordion">
                    <div className="accordion-container-left">
                        <DropDown
                            title="Description"
                            content={location.description}
                        />
                    </div>
                    <div className="accordion-container-right">
                        <DropDown
                            // style = {widthDiv}
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


