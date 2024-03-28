import {Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";
import movieData from "./assets/movie-data.json";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<MovieDetail data={movieData}/>} />
    </Routes>
  )
}
export default App
