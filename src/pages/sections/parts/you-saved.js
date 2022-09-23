import React from "react";
import "../../../styles/scss/styles.scss";
import YouSaved from "../../../assets/save-sale.png";
import { AddAlltoCart } from "../../../components/buttons/buttons";

export default function SavingBox() {
  return (
    <div className="saving-box">
      <img src={YouSaved} alt="you-saved" />
      <AddAlltoCart />
    </div>
  );
}
