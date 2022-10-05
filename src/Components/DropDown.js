import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "../Styles/DropDown.scss"

function Dropdown(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("dropdown_icon");

    const content = useRef(null);

    function toggleDropdown() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "dropdown_icon" : "dropdown_icon rotate"
        );
    }

    return (
        <div className="dropdown_section">
            <button className={`dropdown_section_toggle ${setActive}`} onClick={toggleDropdown}>
                <p className="dropdown_section_title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"white"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="dropdown_section_content"
            >
                <div><p className="dropdown_section_text">{props.content}</p></div>
            </div>
        </div>
    );
}

export default Dropdown

