import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./Components/ContextReducer/ComponentA";
import Counter from "./Components/Counter";
import CounterThree from "./Components/CounterThree";
import CounterTwo from "./Components/CounterTwo";
import GetPost from "./Components/PostWithReducer/GetPost";

export const counterContext = React.createContext();
const initialvalue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    default:
      return;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialvalue);
  return (
    <div>
      <p>counter with primitive value</p>
      <Counter />
      <p>counter with reference value</p>
      <CounterTwo />
      <h2>counter three</h2>
      <CounterThree />
      <p>counter with useContext</p>
      <counterContext.Provider
        value={{ count: count, counterDispatch: dispatch }}
      >
        {/* <p>{count}</p> */}
        <ComponentA />
      </counterContext.Provider>
      <GetPost />
    </div>
  );
}

export default App;
