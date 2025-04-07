// 39-3 A simple Introduction to State change in React

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleCounter() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function handleRemaining() {
    const newCount = count - 1;
    if (newCount >= 0) {
      setCount(newCount);
    }
  }

  const CounterStyle = {
    margine: "50px",
    padding: "15px",
    border: "2px solid red",

    borderRadius: "15px",
  };

  return (
    <div style={CounterStyle}>
      <h2>Count {count}</h2>
      <button onClick={handleCounter}>add</button>
      <button onClick={handleRemaining}>Remain</button>
    </div>
  );
};

export default Counter;
