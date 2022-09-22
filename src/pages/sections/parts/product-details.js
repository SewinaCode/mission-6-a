import React from "react";
import "../../../styles/scss/styles.scss";
import LaptopSale from "../../../assets/laptop-sale.png";
import QuantityPlus from "../../../components/buttons/plus-btn";
import { AddtoCart, CompareWPlus } from "../../../components/buttons/buttons";
// import apiClient from "../../../utils/http-common";

export default function Details({ name, model, old, current, desc }) {
  // const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   apiClient.get("/details").then((response) => {
  //     console.log("Detail list response", response.data);
  //     setDetails(response.data);
  //     // setIsLoading(false);
  //   });
  // }, []);

  return (
    <div className="sec-details">
      <div className="d-w-img">
        <div className="d-model">
          <h1>{name}</h1>
          <h3>Model {model}</h3>
          <div className="p-flex">
            <h2>${current}</h2>
            <p>was ${old}</p>
          </div>
        </div>
        <img src={LaptopSale} alt="laptop-sale-icon" />
      </div>
      <p>{desc}</p>
      <QuantityPlus />
      <div className="cart-compare-btns">
        <AddtoCart />
        <div className="compare-pad">
          <CompareWPlus />
        </div>
      </div>
    </div>
  );
}
