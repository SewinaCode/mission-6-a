import React from "react";
import ProductPage from "./pbmech-frontpage";
import Footer from "./sections/footer";
import { BackBtn } from "../components/buttons/buttons";
import ProPicDet from "./sections/product-pic-det";
import FeatSpec from "./sections/feat-spec";
import ComboDeals from "./sections/comboDeal";
import CompareSimilar from "./sections/comp-similar";

export default function BasePage() {
  return (
    <>
      <ProductPage />
      <BackBtn />
      <ProPicDet />
      <FeatSpec />
      <ComboDeals />
      <CompareSimilar />
      <Footer />
    </>
  );
}
