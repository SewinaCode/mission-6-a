import React from "react";
import "../../../styles/scss/styles.scss";
import { PaddtoCart, PcompareWPlus } from "../../../components/buttons/buttons";
import defaultImg from "../../../assets/default-noimg.png"
import FeatureSpec from "../../../components/p-icons"


export default function ProductSummary({
    name,
    model,
    imageUrl,
    specfications,
    price,
    was
}) {
    return (
        <div className="p-summary">
            <div className="p-summaryImg">
                <img src={defaultImg} alt="Laptop" />
            </div>
            <div className="p-label">
                <div className="p-line1">
                    <h1>{name}</h1>
                </div>
                <div className="p-line2">
                    {/* <h3>Model {model}</h3> */}
                    <h2>${price}</h2>
                    <p>was${was}</p>
                </div>
            </div>
            <FeatureSpec />
            <div className="p-footer">
                <PcompareWPlus />
                <PaddtoCart />
            </div>
        </div >
    );
}
