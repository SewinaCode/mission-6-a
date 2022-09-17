// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Laptop from "../assets/macbook-pro-test.webp";

export default function Cards({
  backgroundColor,
  border,
  // description,
  margin,
  // name,
  padding,
  // product,
  // quantity,
  // imageUrl,
}) {
  //Put code to transfer data here. use array.map() function - means whenever the database is updated it will create another card with new document from MongoDB.

  return (
    <>
      {tech &&
        tech.map((tech) => (
          <div
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              margin: "20px 0px",
              padding: "20px 30px",
            }}
          >
            <img src={Laptop} alt={tech.desc} />
            <div>
              <h2>
                <b>Product name</b>: {tech.name}
              </h2>
            </div>
            <div>
              <h2>
                <b>Product Description</b>: {tech.desc}
              </h2>
            </div>
            <div>
              <h2>
                <b>Quantity</b>: {tech.quantity}
              </h2>
            </div>
          </div>
        ))}
    </>
  );
}
