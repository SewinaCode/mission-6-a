import React, { useState, useEffect } from "react";
import "../../styles/scss/styles.scss";
// import Loading from "../../components/Loading";
import { FeatureIcon, SpecTabOrg, SpecTabGrey } from "../../components/i-feat";
import SpecsExpand from "./parts/specs-expand";
import apiClient from "../../utils/http-common";
// import TagIcon from "../../assets/tag-icon1.png";

export default function FeatSpec() {
  const [featureList, setFeatureList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const id = "632c119555e979eca0541bf6";
  useEffect(() => {
    apiClient.get(`/features/?id=${id}`).then((response) => {
      console.log("Feature list response", response.data);
      setFeatureList(response.data);
      // setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <div className="linear-bg">
        <div className="features">
          <>
            {featureList.map((feature) => {
              console.log(feature.product_name);
              return (
                <FeatureIcon
                  image={feature.imgURL}
                  top={feature.spec_title}
                  middle={feature.main_feat}
                  bottom={feature.minor_feat}
                />
              );
            })}
          </>
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
