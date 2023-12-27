import React, { useCallback, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterStateIncrement, counterStateDecrement, counterStateReset } from './Redux/slice/userSlice';
import DemoA from './components/DemoA';
import DemoB from './components/DemoB';
import DemoC from './components/DemoC';

function App() {
  const [demoProp, setDemoProp] = useState("Demo String");

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

  const handleDemoA = useCallback(() => {
    //write a code here
  }, [])

  const handleDemoB = useCallback(() => {
    //write a code here
  }, [])

  const handleDemoC = useCallback(() => {
    //write a code here
  }, [])

  // const handleDemoA = () => {

  // }

  return (
    <div className="App">
      <h1>Redux By Toolkit</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => handleIncrement()}>increment</button>
      <button disabled={count <= 0} onClick={() => handleDecrement()}>decrement</button>
      <button disabled={count == 0} onClick={() => handleReset()}>reset</button>

      <div>
        <button onClick={() => setDemoProp("Real Demo")}>Click Me</button>
        <DemoA handleDemoA={handleDemoA} />
        <DemoB handleDemoB={handleDemoB} />
        <DemoC handleDemoC={handleDemoC} />
      </div>
      
    </div>
  );
}

export default App;
