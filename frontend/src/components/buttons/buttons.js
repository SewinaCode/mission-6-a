import React from "react";
import ComparePlus from "../../assets/compare-icon.png";
import Cart from "../../assets/cart.png";
import OrangeArrow from "../../assets/left-org-arrow.png";
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

function AddAlltoCart() {
  return (
    <div className="orange-filled">
      <img src={Cart} alt="add-to-cart-icon" />
      <button className="cart-text">Add All Item To Cart</button>
    </div>
  );
}

function BackBtn() {
  return (
    <div className="back-button">
      <img src={OrangeArrow} alt="orange-arrow" />
      <div className="backBtn-text">
        <h5>BACK</h5>
        <p>to products</p>
      </div>
    </div>
  );
}

export { CompareWPlus, AddtoCart, AddAlltoCart, BackBtn };
