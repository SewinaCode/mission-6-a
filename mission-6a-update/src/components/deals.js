import React from "react";
import "../styles/scss/styles.scss";
import Laptop4 from "../assets/laptop-img4.png";
import { Checkbox } from "./buttons/buttons";

function Deal({ crossed, uncrossed, title, model, feat }) {
  return (
    <div className="combo-align">
      <Checkbox />
      <div className="combo-content">
        <FeatComboV
          image={Laptop4}
          name="laptop-four"
          top={title}
          middle={model}
          bottom={feat}
        ></FeatComboV>
        <div className="prices-un-cross">
          <p className="crossed-price">{crossed}</p>
          <p className="uncrossed-price">{uncrossed}</p>
        </div>
      </div>
    </div>
  );
}

//Text Component
function FeatComboV({ image, name, top, middle, bottom }) {
  return (
    <div className="combo-icon">
      <img src={image} alt={name} />
      <div className="ft-txt">
        <p className="abel-25">{top}</p>
        <p className="abel-35">{middle}</p>
        <p className="abel-18">{bottom}</p>
      </div>
    </div>
  );
}

export { Deal, FeatComboV };
