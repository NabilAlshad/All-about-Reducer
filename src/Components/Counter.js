import React, { useReducer } from "react";

const initialState = 0; //primitve example
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;

    case "decrement":
      return state - 1;
    default:
      return state;
  }
}; //reducer function takes two parameters one is a state and other is action

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState); // here count will be state value and dispatch is a function which takes action to be dispatched
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("increase")}>increase </button>

      <button onClick={() => dispatch("decrease")}>decrease</button>
    </div>
  );
};

export default Counter;
