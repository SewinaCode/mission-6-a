import React from "react";
import "../../styles/scss/styles.scss";
import {
  FeatureIcon,
  SpecTabOrg,
  SpecTabGrey,
  SpecsExpand,
  BreakdownCard,
} from "../../components/i-feat";
import TagIcon from "../../assets/tag-icon 1.png";

export default function FeatSpec() {
  return (
    <section>
      <div>
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
          <SpecsExpand>
            <BreakdownCard
              title="Brand"
              desc="Intel Core i3-1115G4 (2C / 4T, 3.0 / 4.1GHz, 6MB)"
            />
          </SpecsExpand>
        </div>
      </div>
    </section>
  );
}
