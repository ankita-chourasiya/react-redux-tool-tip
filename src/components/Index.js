import React from 'react';
import { useSelector } from 'react-redux'

function Index() {
  const {testState, count} = useSelector((state) => state.user);
  console.log("Initial State", testState)


  return (
    <div className="App">
      <h1>Other Component</h1>
      <h3>Count: {count}</h3>
    </div>
  );
}

export default Index;
