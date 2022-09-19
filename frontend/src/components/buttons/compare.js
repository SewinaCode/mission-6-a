import React from "react";
import ComparePlus from "../../assets/compare-icon.png";
import "../../styles/scss/styles.scss";

export default function CompareWPlus({}) {
  return (
    <div className="orange-font">
      <img src={ComparePlus} alt="compare-icon" />
      <button>Compare</button>
    </div>
  );
}
