import React, { useState } from "react";

import './Counter.css';

const Counter = () => {
  const [contador, setCounter] = useState(0);
  const handleOnClick = (operator) => {
    const newValue = operator === '+'
      ? operator + 1
      : operator - 1

      setCounter(newValue);
  }

  return (
    <div className="counter">
      <span>{contador}</span>
      <button onClick={() => handleOnClick('-')}>-</button>
      <button onClick={() => handleOnClick('+')}>+</button>
    </div>
  );
}

export default Counter;