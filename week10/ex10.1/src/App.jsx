import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Llamas } from './views/Llamas' // Import the Llamas component
import { Alpaca } from './views/Alpaca' // Import the Alpaca component
import './App.css'

function App() {
  return (
    <>
      {/* Navigation Here */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpacas">Alpacas</Link></li>
      </ul>
      {/* Routes here - 1 route for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llamas" element={<Llamas />} />
        <Route path="/alpacas" element={<Alpaca />} />
      </Routes>
    </>
  )
}

export default App
