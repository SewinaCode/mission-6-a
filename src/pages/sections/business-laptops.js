import React from "react";
import Filters from "../sections/parts/FiltersGroup-mock"
import Products from "../../components/Products"
import "../../styles/scss/styles.scss";


export default function content() {
    return (
        <div className="sec-bp-content">
            <Filters  className="sec-bp-filter"/>
            <div className='sec-bp-products'>
            <Products />
            </div>
            
        </div>
    )

}