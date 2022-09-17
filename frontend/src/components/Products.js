import Card from "../components/cards";
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
  }, []);

  useEffect(() => {
    Object.keys(productList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [productList]);

  return isLoading ? (
    <Loading />
  ) : (
      <div>
        {productList.map((product) => {
          console.log(product.product_name)
          return (
            <Card
              key={product._id}
              product={product.product_name}
              description={product.product_description}
              quantity={product.quantity}
              imageUrl={product.imageUrl}
            />
          );
        })}
    </div>
          )
}

export default Products;
