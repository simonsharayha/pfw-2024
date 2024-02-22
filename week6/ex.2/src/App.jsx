import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'world';
  const approvalMessage = "I, Simon, approve this message.";
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the coffee file a police report? It got mugged.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why was the math book sad? It had too many problems.",
  ];
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return (
    <>
      <h1>😎</h1>
      <h1>Hello, {name}!</h1>
      <h2>{approvalMessage}</h2>
      <h3>Here's a joke for you:</h3>
      <p>{randomJoke}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          vote count {count}
        </button>

      </div>
    </>
  )
}

export default App
