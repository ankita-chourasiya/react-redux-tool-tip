import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const {testState} = useSelector((state) => state.user)
  console.log("Initial State", testState)

  return (
    <div className="App">
      <h1>Redux By Slice</h1>
    </div>
  );
}

export default App;
