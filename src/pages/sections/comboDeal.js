import React from "react";
import "../../styles/scss/styles.scss";
import { Deal } from "../../components/deals";
import SavingBox from "./parts/you-saved";

export default function ComboDeals() {
  return (
    <section className="sec-pad-consist">
      <h5 className="c-d-heading">
        COMBO DEALS: Accessories Frequently Bought Together
      </h5>
      <div className="compare-section">
        <div className="the-deals">
          <Deal
            crossed="$1200"
            uncrossed="$1100"
            title="Dell"
            model="XPS 13"
            feat="13.6” • Core i7-10750H • 16 GB • GTX 1650 Ti • 512 GB"
          />

          <Deal
            crossed="$1200"
            uncrossed="$1100"
            title="Dell"
            model="XPS 13"
            feat="13.6” • Core i7-10750H • 16 GB • GTX 1650 Ti • 512 GB"
          />

          <Deal
            crossed="$1200"
            uncrossed="$1100"
            title="Dell"
            model="XPS 13"
            feat="13.6” • Core i7-10750H • 16 GB • GTX 1650 Ti • 512 GB"
          />
        </div>
        <SavingBox />
      </div>
    </section>
  );
}
