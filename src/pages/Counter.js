import React, { useState, useEffect } from "react";

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
    <>
      <div className="counter">
        <span className="span-counter">{contador}</span>
        <div>
          <button onClick={() => handleOnClick('-')}>-</button>
          <button onClick={() => handleOnClick('+')}>+</button>
          <button onClick={() => setTeste(321)}>Teste</button>
        </div>
      </div>
    </>
  );
}

export default Counter;