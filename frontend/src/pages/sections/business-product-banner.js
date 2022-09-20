import React from "react";
import BannerImg from "../../assets/VideoConferencing-crop.png";
import "../../styles/scss/styles.scss";

export default function Banner() {
    return (
        <div>
            <img className="bannerImg" src={BannerImg} alt="BusinessBanner-1" />
            <img className="bannerImg" src={BannerImg} alt="BusinessBanner-2" />    
        </div>
    )
}
