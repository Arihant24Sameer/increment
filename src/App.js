// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/actions";
import "./App.scss";
const App = () => {
  const count = useSelector((state) => state.counter); // Assuming 'counter' is the name of your reducer slice
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to Redux</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <button onClick={() => dispatch(decrement())}>-</button>
        <input name="quantity" type="text" value={count} readOnly />
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default App;
