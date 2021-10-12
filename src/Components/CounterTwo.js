//object reference example

import React, { useReducer } from "react";
const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "increment2":
      return {
        ...state,
        counter2: state.counter2 + action.value,
      };
    case "decrement2":
      return {
        ...state,
        counter2: state.counter2 - action.value,
      };
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{count.counter}</p>
      {/* increment buttons  */}
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
      >
        + increment by 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 5,
          })
        }
      >
        + increment by 5
      </button>

      {/* decrement buttons   */}
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 1,
          })
        }
      >
        decrement by 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 5,
          })
        }
      >
        decrement by 5
      </button>
      <p>second counter </p>
      <p>{count.counter2}</p>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        increment by one by counter two
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        increment by one by counter two
      </button>
      <button>decrement by one by counter two</button>
    </div>
  );
};

export default CounterTwo;
