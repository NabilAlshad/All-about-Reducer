import React, { useContext } from "react";
import { counterContext } from "../../App";

const ComponentB = () => {
  const useCounter = useContext(counterContext);
  return (
    <div style={{ marginBottom: "200px" }}>
      <h1>Component B</h1>
      <p>this is a counter build with useContext </p>
      <button
        onClick={() =>
          useCounter.counterDispatch({
            type: "increment",
            value: 1,
          })
        }
      >
        increment by one with context{" "}
      </button>
      <p>{useCounter.count}</p>
      <button
        onClick={() =>
          useCounter.counterDispatch({
            type: "decrement",
            value: 1,
          })
        }
      >
        decrement by one with context{" "}
      </button>
    </div>
  );
};

export default ComponentB;
