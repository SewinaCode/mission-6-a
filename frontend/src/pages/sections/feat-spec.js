import React from "react";
import "../../styles/scss/styles.scss";
import { FeatureIcon, SpecTabOrg, SpecTabGrey } from "../../components/i-feat";
import SpecsExpand from "./parts/specs-expand";
import TagIcon from "../../assets/tag-icon 1.png";

export default function FeatSpec() {
  return (
    <section>
      <div className="linear-bg">
        <div className="features">
          <FeatureIcon
            image={TagIcon}
            top="top"
            middle="middle"
            bottom="bottom"
          />
          <FeatureIcon
            image={TagIcon}
            top="top"
            middle="middle"
            bottom="bottom"
          />
          <FeatureIcon
            image={TagIcon}
            top="top"
            middle="middle"
            bottom="bottom"
          />
          <FeatureIcon
            image={TagIcon}
            top="top"
            middle="middle"
            bottom="bottom"
          />
          <FeatureIcon
            image={TagIcon}
            top="top"
            middle="middle"
            bottom="bottom"
          />
        </div>
        <div className="spec-details">
          <div className="spec-details-tab">
            <SpecTabOrg tabName="Specifications" />
            <SpecTabGrey tabName="Features" />
            <SpecTabGrey tabName="Delivery & Pick up" />
            <SpecTabGrey tabName="Return & Warranty" />
          </div>
          <SpecsExpand />
        </div>
      </div>
    </section>
  );
}
