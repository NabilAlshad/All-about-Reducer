import React, { useReducer } from "react";

const initialState = 0;
const initialState2 = 5;
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + action.value;

    case "decrease":
      return state - action.value;
    default:
      return state;
  }
}; //reducer function takes two parameters one is a state and other is action

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState); // here count will be state value and dispatch is a function which takes action to be dispatched
  const [count2, dispatch2] = useReducer(reducer, initialState2);
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: "increase", value: 2 })}>
          increase{" "}
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "decrease",
              value: 2,
            })
          }
        >
          decrease
        </button>
      </div>
      <p>{count2}</p>
      <button
        onClick={() =>
          dispatch2({
            type: "increase",
            value: 3,
          })
        }
      >
        increase 3{" "}
      </button>

      <button
        onClick={() =>
          dispatch2({
            type: "decrease",
            value: 3,
          })
        }
      >
        decrease3
      </button>
    </div>
  );
};

export default CounterThree;
