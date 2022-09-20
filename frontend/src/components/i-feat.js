import React from "react";
import "../styles/scss/styles.scss";
// import Specification from "../assets/specifications.png";
// import Features from "../assets/features.png";
// import Delivery from "../assets/delivery.png";
// import Return from "../assets/returns.png";

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

function SpecsExpand() {
  return (
    <div className="rec-org-border">
      <BreakdownCard
        title="Brand"
        desc="Intel Core i3-1115G4 (2C / 4T, 3.0 / 4.1GHz, 6MB)"
      />
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

export { FeatureIcon, SpecTabOrg, SpecTabGrey, SpecsExpand, BreakdownCard };
