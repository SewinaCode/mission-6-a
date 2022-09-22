import React from "react";
import Breadcrumbs from "./sections/breadcrumbs-businessLaptop";
import Footer from "./sections/footer";
import { BackBtn } from "../components/buttons/buttons";
import Banner from "./sections/parts/business-product-banner";
import Content from "./sections/business-laptops"

export default function BusinessLaptops() {
    return (
        <div className="page-bp">
            <Breadcrumbs />
            <div className="sec-bp-navbar">
                <BackBtn />
                <h1>Business Laptops</h1>
            </div>
            <Banner />
            <Content />
            <Footer />
        </div>
    );
}