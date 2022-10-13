import React from "react";
import logoFooter from"../Assets/logoFooter.svg"
import "../Styles/Footer.scss"
import { Link } from "react-router-dom";
import {useEffect} from "react";

function Footer() {

    useEffect(() => {
        // 👇️ scroll to top on page load
        // ajout du scroll top au clique sur le logo present dans le footer
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div>
            <div className="ImgFooterDiv">
                <div className="ImgFooterDiv_BigDiv">
                    <Link to="/" onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>
                        <img src={logoFooter} alt="logo_footer" className="ImgFooterDiv_Img"/>
                    </Link>
                </div>
                <div className="ImgFooterDiv_content">© 2020 Kasa. All rights reserved</div>
            </div>

        </div>
    )

}
export default Footer
