import React, { useState } from "react";

const Counter = (props) => {
  const [number, setNumber] = useState(0);

  // 현재 값을 가져와서 비교하여 값을 증가하겠다
  const onIncrease = () => {
    setNumber((number) => number + 1);
  };

  const onDecrease = () => {
    const minNumber = number < 1 ? 0 : number - 1;
    setNumber((number) => minNumber);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
