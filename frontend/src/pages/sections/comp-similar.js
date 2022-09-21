import React from "react";
import "../../styles/scss/styles.scss";
import { SingularCards } from "../../components/compcard";

export default function CompareSimilar() {
  return (
    <section className="sec-pad-consist">
      <h5 className="c-d-heading">Compare with similar business Laptops</h5>
      <div className="the-cards">
        <SingularCards />
        <SingularCards />
        <SingularCards />
      </div>
    </section>
  );
}
