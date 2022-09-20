import React from "react";
import "../../styles/scss/styles.scss";
import FeatureIcon from "../../components/i-feat";
import TagIcon from "../../assets/tag-icon 1.png";

export default function FeatSpec() {
  return (
    <section>
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
    </section>
  );
}
