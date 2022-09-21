import React, { useState, useEffect } from "react";
import Card from "../pages/sections/parts/product-summary-card";
import Loading from "./Loading";
import apiClient from "../utils/http-common"


function Products() {

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiClient.get("/products").then((response) => {
      console.log('Product list response', response.data)
      setProductList(response.data);
      setIsLoading(false)
    });
  }, [])


  return isLoading ? (
    <Loading />
  ) : (
    <>
      {productList.map((product) => {
        console.log(product.name)
        return (
          <Card
            key={product._id}
            name={product.name}
            model={product.model}
            price={product.saleprice | ""}
            was={product.stockprice |"no stock"}
            imageUrl={product.ImgURL}
            specfications={product.specfications}
          />
        );
      })}
    </>
  )
}

export default Products;


