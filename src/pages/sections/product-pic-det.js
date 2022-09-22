import React from "react";
import "../../styles/scss/styles.scss";
import ProductPics from "./parts/product-pics";
import Details from "../../pages/sections/parts/product-details";

export default function ProPicDet() {
  return (
    <>
      <div className="product-pic-det">
        <ProductPics />
        <Details />
      </div>
      <div className="separate"></div>
    </>
  );
}
