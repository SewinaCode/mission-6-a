import React from "react";
//Importing components
import ProductPage from "./pbmech-frontpage";
// import CompareWPlus from "../components/buttons/compare";
import Details from "./sections/product-details";

export default function CardPage() {
  return (
    <div>
      <ProductPage />
      <Details />
    </div>
  );
}
