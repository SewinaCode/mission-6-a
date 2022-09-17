import React from "react";
import Laptop from "../assets/macbook-pro-test.webp";

export default function Cards({
  backgroundColor,
  border,
  description,
  margin,
  name,
  padding,
  product,
  quantity,
  imageUrl,
}) {
  //Put code to transfer data here. use array.map() function - means whenever the database is updated it will create another card with new document from MongoDB.

  return (
    <>
         <div
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              margin: "20px 0px",
              padding: "20px 30px",
            }}
          >
        <img src={Laptop} alt={imageUrl} />
            <div>
              <h2>
                <b>Product name</b>: {product}
              </h2>
            </div>
            <div>
              <h2>
                <b>Product Description</b>: {description}
              </h2>
            </div>
            <div>
              <h2>
                <b>Quantity</b>: {quantity}
              </h2>
            </div>
          </div>
    </>
  );
}
