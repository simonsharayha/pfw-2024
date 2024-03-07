import React, { useState } from 'react';
import './App.css';

function App() {
  const [camelid, setCamelid] = useState('');

  const handleButtonClick = (camel) => {
    setCamelid(camel);
  };

  return (
    <div className="App">
      <h1>Choose your favorite camelid!</h1>
      <div className="buttons">
        <button onClick={() => handleButtonClick('llama')}>Llama</button>
        <button onClick={() => handleButtonClick('alpaca')}>Alpaca</button>
      </div>
      {camelid && <img src={`/${camelid}.jpg`} alt={camelid} />}
    </div>
  );
}

export default App;
