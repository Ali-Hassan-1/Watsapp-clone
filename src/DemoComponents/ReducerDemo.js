import React, { useReducer } from "react";

function ReducerDemo() {
  //Reducer Func
  const myReducerfunc = (state, action) => {
    if (action.type === "increment")
      return {
        count: state.count + 1,
        evenOdd: (state.count + 1) % 2 === 0 ? "Even" : "Odd",
      };
    if (action.type === "reset") return { count: 0, evenOdd: "Even" };
  };
  // Reducer Hook
  const [state, dispatch] = useReducer(myReducerfunc, {
    count: 0,
    evenOdd: "Even",
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.evenOdd}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerDemo;
