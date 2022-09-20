import React from "react";
import "../../../styles/scss/styles.scss";
import { AddtoCart, CompareWPlus } from "../../../components/buttons/buttons";
import defaultImg from "../../../assets/default-noimg.png"

export default function ProductSummary({
    name,
    model,
    imageUrl,
    specfications,
    price,
    wasprice
}) {
    return (
        <div className="p-summary">
            <div className="p-summaryImg">
                <img src={defaultImg}  alt="Laptop" />
            </div>
            <div className="d-w-img">
                <div className="d-model">
                    <h1>{name}</h1>
                    <h3>Model {model}</h3>
                </div>
                <div className="p-flex">
                    <h2>${price}</h2>
                    <p>was ${wasprice}</p>
                </div>
            </div>
            <div className="p-features">
                <h1>List of Features</h1>
                <h1>List of Features</h1>
                <h1>List of Features</h1>
                <h1>List of Features</h1>
                <h1>List of Features</h1>
                <h1>List of Features</h1>
            </div>
            <div className="cart-compare-btns">
                <CompareWPlus />
                <AddtoCart />        
            </div>
        </div>
    );
}
