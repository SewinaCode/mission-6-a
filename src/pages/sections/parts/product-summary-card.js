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
                <div className="p-make">
                    <h1>{name}</h1>
                    <h3>Model{model}</h3>
                </div>
                <div className="p-price">
                    <h1>${price}</h1>
                    <h3>was ${was}</h3>
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
