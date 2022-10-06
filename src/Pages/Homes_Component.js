import React from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";












function HomesPage () {
    const [location, setLocations] = useState({rating:'', ratingless:'', tags:[], equipments:[], pictures:[],host:{'name':'', 'picture':''} })

        const { id } = useParams()

    useEffect(() => {
        fetch('/Datas/HomeList.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i = 0; i<data.length; i++) {
                    if (data[i].id === id) {
                        setLocations(data[i])
                    }
                }
            })
    }, [id])


    return (
        <div>

        </div>
    )


















}

export default HomesPage