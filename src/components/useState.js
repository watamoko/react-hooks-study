import React, { useState } from 'react';

const foods = ['banana', 'apple', 'bread', 'rice', 'meat'];

const Counter = () => {
  const [count, setCount] = useState(0);
  const [food, setFood] = useState(0);

  const OnRandomFoodsButtonClicked = () => {
    setFood(Math.floor(Math.random()*foods.length));
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <p>今日の晩御飯は {foods[food]}</p>
      <button onClick={() => OnRandomFoodsButtonClicked()}>晩御飯ﾀｧｧｲﾑ</button>
    </div>
  );
}

export default Counter;
