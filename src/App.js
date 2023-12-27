import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterStateIncrement, counterStateDecrement, counterStateReset } from './Redux/slice/userSlice';

function App() {
  const {testState, count} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("Initial State", testState)

  const handleIncrement = () => {
    dispatch(counterStateIncrement());
  }

  const handleDecrement = () => {
    dispatch(counterStateDecrement());
  }

  const handleReset = () => {
    dispatch(counterStateReset());
  }

  return (
    <div className="App">
      <h1>Redux By Toolkit</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => handleIncrement()}>increment</button>
      <button disabled={count <= 0} onClick={() => handleDecrement()}>decrement</button>
      <button disabled={count == 0} onClick={() => handleReset()}>reset</button>
    </div>
  );
}

export default App;
