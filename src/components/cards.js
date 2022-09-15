import React from "react";

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
    <div
      style={{
        backgroundColor: "white",
        border: "2px solid black",
        margin: "20px 0px",
        padding: "20px 30px",
      }}
    >
      <img src={imageUrl} alt={name} />
      <div>
        <h2>
          <em>Product name</em>: {product}
        </h2>
      </div>
      <div>
        <h2>
          <em>Product Description</em>: {description}
        </h2>
      </div>
      <div>
        <h2>
          <em>Quantity</em>: {quantity}
        </h2>
      </div>
    </div>
  );
}
