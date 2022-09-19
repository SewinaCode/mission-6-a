import React from "react";
import ComparePlus from "../../assets/compare-icon.png";
import Cart from "../../assets/cart.png";
import "../../styles/scss/styles.scss";

function CompareWPlus() {
  return (
    <div className="orange-font">
      <img src={ComparePlus} alt="compare-icon" />
      <button className="compare">Compare</button>
    </div>
  );
}

function AddtoCart() {
  return (
    <div className="orange-filled">
      <img src={Cart} alt="add-to-cart-icon" />
      <button className="cart-text">Add to Cart</button>
    </div>
  );
}

export { CompareWPlus, AddtoCart };
