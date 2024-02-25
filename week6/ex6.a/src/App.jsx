import { useState } from 'react'
import './App.css'

function App() {
  const llamaFacts = [
    "Llamas Have Been Used as Pack Animals for Centuries",
    "They Show Displeasure",
    "They Differ From Alpacas",
    "They Communicate by Humming",
    "They Make Good Guard Animals",
    "They're Easy Keepers"
    ];

  return (
    <>
      <div>
        <h1>Llama Facts</h1>
      </div>
      <ul>
      {llamaFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <h2>one of the last two of your facts</h2>
      <p>{llamaFacts.length > 3 ? llamaFacts[llamaFacts.length - 2] : llamaFacts[llamaFacts.length - 1]}</p>
    </>
  )
}

export default App
