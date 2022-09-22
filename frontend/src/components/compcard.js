import React from "react";
import "../styles/scss/styles.scss";
import { AddtoCart } from "./buttons/buttons";
import { FeatureIcon } from "./i-feat";
import { CompareWPlus } from "./buttons/buttons";
import Graphics from "../assets/graphics-crd.png";

function SingularCards() {
  return (
    <div className="c-border">
      <div className="c-content">
        <MiniProductCards />
        <AddtoCart />
      </div>
      <div className="c-feat">
        <FeatureIcon
          image={Graphics}
          top="Graphic Card"
          middle="Dell XPS 12"
          bottom="Model 355643"
        />
      </div>
      <CompareWPlus />
    </div>
  );
}

function MiniProductCards({ image, name, title, model, price }) {
  return (
    <div className="c-border-mini">
      <img src={image} alt={name} />
      <div className="the-details">
        <p className="the-title">{title}</p>
        <p className="the-model">Model {model}</p>
        <p className="the-price">${price}</p>
      </div>
    </div>
  );
}

export { SingularCards, MiniProductCards };
