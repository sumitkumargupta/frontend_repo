import { useState } from 'react';
import './App.css';
import Stopwatch from './stopwatch';

function App() {
  const[name, setName] = useState("Sumit");

  const handleButton = () => {
    setName("Sumit Kumar Gupta");
  };
    
  

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Stopwatch></Stopwatch>
    </div>
  );
}

export default App;
