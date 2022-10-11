import React, { useEffect, useState } from "react";
import "../Styles/ScrollTopBtn.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faChevronUp )



export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Top: 0 pour remonter en haut de la page
    // Behavior: smooth pour que le scroll rester smooth jusqu'en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        // Button s'affiche apres avoir scroll jus'à un certain point du window
        const toggleVisibility = () => {
            if (window.scrollY > 700 ){
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])

    return (
        <div className="MainDivScrollTop">
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="ButtonScrollTop"
                    style={{
                        background: "grey",
                        border: "none",
                        borderRadius: "50%",
                        color: "white",
                        marginLeft: "15px",
                        cursor: "pointer",
                        fontSize: "16px",
                        lineHeight: "48px",
                        width: "48px",
                        position: "fixed",
                        bottom: "150px",
                        right: "1.5px",

                    }}
                >
                    <FontAwesomeIcon icon={["fas", "chevron-up"]} />
                </div>
            )}
        </div>
    )
}