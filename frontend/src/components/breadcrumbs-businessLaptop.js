import React from "react";
import PBMech from "../assets/pbtech-header.png";
import House from "../assets/House.png";
import Arrow from "../assets/Arrow.png";
import "../styles/scss/styles.scss";

export default function Breadcrumbs() {
    return (
        <div className="header-page">
            <img className="headerimg" src={PBMech} alt="header-img" />
            <div className="breadcrumbs-sec">
                <div className="breadcrumbs">
                    <img src={House} alt="house-icon" />
                    <h3>Computers</h3>
                    <img className="arrow-img" src={Arrow} alt="Arrow-icon" />
                    <h3>Laptops</h3>
                    <img className="arrow-img" src={Arrow} alt="Arrow-icon" />
                    <h3 className="selected-laptop">Business Laptops</h3>
                </div>
            </div>
        </div>
    );
}
