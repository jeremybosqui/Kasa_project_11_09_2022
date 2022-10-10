import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../Assets/logo.svg"
import "../Styles/Banner.scss"
/*import { NavLink } from "react-router-dom";*/




function Banner () {

    /*const handleClick = event => {
        // 👇️ toggle class on click
        event.currentTarget.classList.toggle('bg-salmon');
    };*/

    return (
        <div>
            <div className="BannerDiv">
                <div>
                    {/*build de la banner avec le logo qui est un lien clickable vers le home page et des autres
                    liens dans une nav qui renvoie à chacune des pages dédié*/}
                    <Link to="/">
                        <img src={logo} alt="logo_kasa" className="BannerDiv_Kasa_logo"/>
                    </Link>
                </div>

                {/*<div className="BannerDiv_Kasa_Nav">
                        <NavLink to="/" >Accueil</NavLink>
                        <NavLink activeClassName='active' to="/about">A Propos</NavLink>
                </div>*/}
                <div className="BannerDiv_MainNav">
                    <NavLink
                        className="BannerDiv_Links"
                        to="/home"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF6060' : '#FF6060',
                            background: isActive ? '#f0f0f0' : '',
                            textDecoration: isActive ? "underline" : '',
                            padding: isActive ? "5px" : '',
                            borderRadius: isActive ? "10px" : ''
                        })}
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        className="BannerDiv_Links"
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF6060' : '#FF6060',
                            background: isActive ? '#f0f0f0' : '',
                            textDecoration: isActive ? "underline" : '',
                            padding: isActive ? "5px" : '',
                            borderRadius: isActive ? "10px" : ''
                        })}
                    >
                        À Propos
                    </NavLink>
                    {/*<NavLink
                        className="BannerDiv_Links"
                        to="/error"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF6060' : '#FF6060',
                            background: isActive ? '#f0f0f0' : '',
                            textDecoration: isActive ? "underline" : '',
                            padding: isActive ? "5px" : '',
                            borderRadius: isActive ? "10px" : ''
                        })}
                    >
                        Error
                    </NavLink>*/}
                </div>
            </div>
        </div>
    )
}

export default Banner
