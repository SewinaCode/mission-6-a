import React, { useState } from "react";
import "../../styles/scss/styles.scss";

export default function QuantityPlus() {
  const [count, setCount] = useState(0);
  const minimum = 0;

  function addOne() {
    setCount(count + 1);
  }

  function minusOne() {
    if (count === minimum) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="qty-btn">
      <button onClick={addOne} className="qty-plus">
        +
      </button>
      <div className="count-display">{count}</div>
      <button onClick={minusOne} className="qty-minus">
        -
      </button>
    </div>
  );
}
