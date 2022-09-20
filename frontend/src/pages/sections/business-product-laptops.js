import React from "react";
import Filters from "../../components/filters/FilterGroup"
import Products from "../../components/Products"
import "../../styles/scss/styles.scss";


export default function content() {
    return (
        <section className="sec-business-product-content">
            <Filters />
            <Products />
        </section>
    )

}