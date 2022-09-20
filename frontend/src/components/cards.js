import React from "react";
import "../styles/scss/styles.scss";


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

  return (
    <div className="product-card" >
      <img src={imageUrl} alt={name} />
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
  );
}
