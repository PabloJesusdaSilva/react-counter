import React, { useState, useEffect } from "react";

import Template from "./Template";
import './Counter.css';

const Counter = () => {
  const [contador, setCounter] = useState(0);
  const [teste, setTeste] = useState(123);

  useEffect(() => {
    console.log('Testando useEffect');
  }, [teste]);

  const handleOnClick = operador => {
    const newValue = operador === '+' ? contador + 1: contador - 1

    setCounter(newValue);
  }

  return (
    <Template title="Contador">
      <div className="counter">
        <span className="span-counter">{contador}</span>
        <div>
          <button onClick={() => handleOnClick('-')}>-</button>
          <button onClick={() => handleOnClick('+')}>+</button>
          <button onClick={() => setTeste(321)}>Teste</button>
        </div>
      </div>
    </Template>
  );
}

export default Counter;