import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const storedCount = Number(localStorage.getItem('count'));
  const [count, setCount] = useState(Number.isInteger(storedCount) ? storedCount : 0);

  // arrow function takes in no parameter, return list count
  // note arrow functions are not defined state
  useEffect(() => {
    localStorage.setItem('count', String(count));
  }, [count]); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Chaser</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
