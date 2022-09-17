import React from "react";
//Importing components
import Products from "../components/Products"
import Header from "./sections/header/header";
//Importing CSS
import "./pages-styling.css";
//importing images
// import Laptop from "../assets/macbook-pro-test.webp";

export default function CardPage() {
    return (
        <div className="bg-color">
            <Header />
            <div className="carousel-card bg-color">
                <Products/>
            </div>
        </div>
    );
}