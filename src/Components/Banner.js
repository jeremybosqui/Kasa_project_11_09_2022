import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg"
import "../Styles/Banner.scss"

function Banner () {
    return (
        <div>
            <div>
                <div>
                    {/*build de la banner avec le logo qui est un lien clickable vers le home page et des autres
                    liens dans une nav qui renvoie à chacune des pages dédié*/}
                    <Link to="/">
                        <img src={logo} alt="logo_kasa" className="Kasa_logo"/>
                    </Link>
                </div>
                <div>
                    <nav className="Kasa_Nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/error">Not Found</Link>
                            </li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Banner
