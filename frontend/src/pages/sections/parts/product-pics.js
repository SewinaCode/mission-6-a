import React from "react";
import "../../../styles/scss/styles.scss";
import BlueLeftArrow from "../../../assets/left-blue-arrow.png";
import BlueRightArrow from "../../../assets/right-blue-arrow.png";
// import Laptop1 from "../../assets/laptop-img1.png";
// import Laptop2 from "../../assets/laptop-img2.png";
// import Laptop3 from "../../assets/laptop-img3.png";
import Laptop4 from "../../../assets/laptop-img4.png";
import Preview from "../../../assets/preview.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function ProductPics() {
  //   const images = [
  //     {
  //       src: "../../assets/laptop-img1.png",
  //     },
  //     {
  //       src: "../../assets/laptop-img1.png",
  //     },
  //     {
  //       src: "../../assets/laptop-img1.png",
  //     },
  //     {
  //       src: "../../assets/laptop-img1.png",
  //     },
  //   ];

  return (
    <div className="product-carousel">
      <img src={Preview} alt="bl-left" />
      <div className="img-carousel">
        <img src={BlueLeftArrow} alt="bl-left" />
        <img src={Laptop4} alt="front-laptop" />
        <img src={BlueRightArrow} alt="bl-right" />
      </div>
    </div>
  );
}
