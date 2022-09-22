import React from "react";
import "../styles/scss/styles.scss";
import defImg from "../assets/black-tag.png"

function FeatureIcon({ image, name, spec }) {
    const imgStr=!image?defImg:image
    
    return (
        <div className="p-feat-icon">
            <img src={imgStr} alt={name} />
            <h3>{name}</h3>
            <p>{spec}</p>
        </div>
    );
}

export default FeatureIcon;
