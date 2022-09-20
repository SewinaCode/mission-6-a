import React from "react";
import Breadcrumbs from "../components/breadcrumbs-businessLaptop";
import Footer from "./sections/footer";
import { BackBtn } from "../components/buttons/buttons";
import Banner from "./sections/business-product-banner";
import Products from "./sections/business-product-laptops"

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