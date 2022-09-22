import React from "react";
// import useState from "react"
// import FilterMock from "../../../assets/YourPbtechstore-filter.png";
import FilterMockOpen from "../../../assets/YourPbtechstore-filter-open.png";
import "../../../styles/scss/styles.scss";

export default function FilterGroupmock() {
  return (
    <div className="filterFrame">
      <img className="filtermock" src={FilterMockOpen} alt="filterMock-img" />
    </div>
  );
}
