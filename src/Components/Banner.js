import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg"
import "../Styles/Banner.scss"

function Banner () {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo_kasa" className="Kasa_logo"/>
            </Link>
            <nav className="Kasa_Nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/error">Not Found</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Banner
