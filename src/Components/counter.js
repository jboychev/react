import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container counter">
      <h1>Брояч: {count}</h1>
      <div className="btn-wrapper">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
