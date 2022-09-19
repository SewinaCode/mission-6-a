import React from "react";
import "../styles/scss/styles.scss";

function FeatureIcon({ image, name, top, middle, bottom }) {
  return (
    <div className="feat-icon">
      <img src={image} alt={name} />
      <div className="ft-txt">
        <p className="abel-25">{top}</p>
        <p className="abel-35">{middle}</p>
        <p className="abel-18">{bottom}</p>
      </div>
    </div>
  );
}

export default FeatureIcon;
