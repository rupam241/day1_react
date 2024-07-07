import React, { useState } from "react";
import "./count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseValue = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        alert("number cant not be negative")
       return prev;

      }
    });
  };

  return (
    <>
      <button className="btn1" onClick={addValue}>
        +
      </button>
      <span>{count}</span>
      <button className="btn2" onClick={decreaseValue}>
        -
      </button>
    </>
  );
};

export default Count;
