import React from "react";
import Breadcrumbs from "./sections/breadcrumbs-businessLaptop";
import Footer from "./sections/footer";
import { BackBtn } from "../components/buttons/buttons";
import Banner from "./sections/parts/business-product-banner";
import Products from "./sections/business-laptops"

export default function BusinessLaptops() {
    return (
        <>
            <Breadcrumbs />
            <div className="business-product-header">
                <BackBtn />
                <h1>Business Laptops</h1>
            </div>
            <Banner />
            <Products />
            <Footer />
        </>
    );
}