import React from "react";
import BannerImg from "../../../assets/VideoConferencing-crop.png";
import "../../../styles/scss/styles.scss";

export default function Banner() {
    return (
        <div className="sec-bp-bannerImg" >
            <img className="sec-bp-bannerImg" src={BannerImg} alt="BusinessBanner-1" />
            <img className="sec-bp-bannerImg" src={BannerImg} alt="BusinessBanner-2" />    
        </div>
    )
}
