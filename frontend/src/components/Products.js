import Card from "../pages/sections/parts/product-summary-card";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";



function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      console.log('Product list response',response.data)
      setProductList(response.data);
    });
  });

  useEffect(() => {
    Object.keys(productList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [productList]);

  return isLoading ? (
    <Loading />
  ) : (
      <div className="p-products-group">
        {productList.map((product) => {
          console.log(product.product_name)
          return (
            <Card
              key={product._id}
              name={product.product_name}
              model={product.product_model}
              price={product.price}
              wasprice={product.wasprice}
              imageUrl={product.imageUrl}
              specfications={product.specfications}
            />
          );
        })}
    </div>
          )
}

export default Products;
