import React, { useState, useEffect } from "react";
import Card from "../pages/sections/parts/product-summary-card";
import Loading from "./Loading";
import apiClient from "../utils/http-common"
import quickSort from "../utils/quickSortStrArray"


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
        {quickSort(productList, "product_name").map((product) => {
        console.log(product.name)
        return (
          <Card
            key={product._id}
            name={product.product_name}
            model={product.minor_feat}
            price={product.current_price|1500}
            was={product.stock_price|1200}
            imageUrl={product.imgURL}
            specfications={product.specfications|"no specs"}
          />
        );
      })}
    </>
  )
}

export default Products;


