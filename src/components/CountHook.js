import React from "react";

const CountHook = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>The current number is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
};

export default CountHook;
