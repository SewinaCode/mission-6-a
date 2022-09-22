import React, { useState } from "react";
import "../../../styles/scss/styles.scss";
import BlueLeftArrow from "../../../assets/left-blue-arrow.png";
import BlueRightArrow from "../../../assets/right-blue-arrow.png";
import Laptop1 from "../../../assets/laptop-img1.png";
import Laptop2 from "../../../assets/laptop-img2.png";
import Laptop3 from "../../../assets/laptop-img3.png";
import Laptop4 from "../../../assets/laptop-img4.png";

import Laptop1_1 from "../../../assets/laptop-img1.png";
import Laptop2_1 from "../../../assets/laptop-img2.png";
import Laptop3_1 from "../../../assets/laptop-img3.png";
import Laptop4_1 from "../../../assets/laptop-img4.png";
// import Preview from "../../../assets/preview.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function ProductPics() {
  const [slides] = useState([
    {
      source: { Laptop1_1 },
      title: "laptop 1",
    },
    {
      source: { Laptop2_1 },
      title: "laptop 2",
    },
    {
      source: { Laptop3_1 },
      title: "laptop 3",
    },
    {
      source: { Laptop4_1 },
      title: "laptop 4",
    },
  ]);

  // SET CAROUSEL DEFAULTS
  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  const arrowRightClick = (e) => {
    e.preventDefault();
    currentPosition !== slides.length - 1 // Check index length
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition((currentPosition = 0));
    currentSlide = slides[currentPosition];
  };

  const arrowLeftClick = (e) => {
    e.preventDefault();
    currentPosition !== 0 // Check index length
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition((currentPosition = slides.length - 1));
    currentSlide = slides[currentPosition];
  };

  const buttonCheck1 = () => {
    currentPosition !== 0
      ? setCurrentPosition(0)
      : setCurrentPosition(currentPosition);
    currentSlide = slides[currentPosition];
  };

  const buttonCheck2 = () => {
    currentPosition !== 1
      ? setCurrentPosition(1)
      : setCurrentPosition(currentPosition);
    currentSlide = slides[currentPosition];
  };

  const buttonCheck3 = () => {
    currentPosition !== 2
      ? setCurrentPosition(2)
      : setCurrentPosition(currentPosition);
    currentSlide = slides[currentPosition];
  };

  const buttonCheck4 = () => {
    currentPosition !== 3
      ? setCurrentPosition(3)
      : setCurrentPosition(currentPosition);
    currentSlide = slides[currentPosition];
  };

  return (
    <div className="product-carousel">
      <div className="btn-c">
        <img onClick={buttonCheck1} src={Laptop1} alt="bl-left" />

        <img onClick={buttonCheck2} src={Laptop2} alt="bl-left" />

        <img onClick={buttonCheck3} src={Laptop3} alt="bl-left" />

        <img onClick={buttonCheck4} src={Laptop4} alt="bl-left" />
      </div>
      <div className="img-carousel">
        <img
          onClick={arrowLeftClick}
          id="arrow-left"
          src={BlueLeftArrow}
          alt="bl-left"
        />
        <div>
          <img
            src={slides.source}
            alt={currentSlide.title}
            className="slider-img"
          />
        </div>
        {/* <div>{currentSlide.source}</div> */}
        <img
          onClick={arrowRightClick}
          id="arrow-left"
          src={BlueRightArrow}
          alt="bl-right"
        />
      </div>
    </div>
  );
}
