import React from "react";
import "../../styles/scss/styles.css";
import LaptopSale from "../../assets/laptop-sale.png";
import QuantityPlus from "../../components/buttons/quantity/plus-btn";
import { AddtoCart, CompareWPlus } from "../../components/buttons/compare";

export default function Details() {
  return (
    <section>
      <div className="d-w-img">
        <div className="d-model">
          <h1>DELL XPS 13</h1>
          <h3>Model 355643</h3>
          <div className="p-flex">
            <h2>$1100</h2>
            <p>was $1200</p>
          </div>
        </div>
        <img src={LaptopSale} alt="laptop-sale-icon" />
      </div>
      <p>
        Designed for the modern workplace, the Lenovo V15 Gen 2 (15.6" Intel)
        laptop gets it right. Suited for mobile productivity, it yields great
        performance in the office or at home. Windows 11 Pro, a choice of Intel®
        processors, plus top-notch security, memory, and storage options, give
        you a smooth workday, every day.
      </p>
      <QuantityPlus />
      <div className="cart-compare-btns">
        <AddtoCart />
        <CompareWPlus />
      </div>
    </section>
  );
}
