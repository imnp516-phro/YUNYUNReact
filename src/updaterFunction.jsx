import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function increment() {
    setCount( count => count + 1);
    setCount( count => count + 1);
    setCount( count => count + 1);
  }

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={decrement}>Giam</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Tang</button>
    </div>
  );
}

export default UpdaterFunction;
