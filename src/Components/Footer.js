import React from "react";
import logoFooter from"../Assets/logoFooter.svg"
import "../Styles/Footer.scss"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <div className="ImgFooterDiv">
                <div className="ImgFooterDiv_BigDiv">
                    <Link to="/"><img src={logoFooter} alt="logo_footer" className="ImgFooterDiv_Img"/></Link>
                </div>
                <div>© 2020 Kasa. All rights reserved</div>
            </div>

        </div>
    )

}
export default Footer
