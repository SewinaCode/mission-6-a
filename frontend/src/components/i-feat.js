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

function SpecTabOrg({ tabName }) {
  return (
    <div className="tabs-orange">
      <h3 className="tab-name">{tabName}</h3>
    </div>
  );
}

function SpecTabGrey({ tabName }) {
  return (
    <div className="tabs-grey">
      <h3 className="grey-name">{tabName}</h3>
    </div>
  );
}

function BreakdownCard({ title, desc }) {
  return (
    <div className="overall-crd">
      <div className="crd-title">
        <h4>{title}</h4>
      </div>
      <div className="crd-desc">
        <h4>{desc}</h4>
      </div>
    </div>
  );
}

export { FeatureIcon, SpecTabOrg, SpecTabGrey, BreakdownCard };
