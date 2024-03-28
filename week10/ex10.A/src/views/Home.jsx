import {useState} from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewMovieForm } from "../NewMovieForm/NewMovieForm";
import movieData from "../assets/movie-data.json";
export function Home () {
    const [movies, setMovies] = useState(movieData);
  function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = movies.filter((nolanMovies) => {
    return nolanMovies.id !== id;
  })
  setMovies(updatedArray)
 }
 function duplicateCard(id) {
  console.log("duplicate me", id)
  const matchingMovie = movies.find((nolanMovies) => {
    return nolanMovies.id === id;
  });
  const updatedMovie = {...matchingMovie, id: nanoid()}
  setMovies([...movies, updatedMovie]);
 }

function addCard(newCard) {
    const cardWithID = {
      ...newCard,
      id: nanoid()
    }
    setMovies(prevMovies => [...prevMovies, cardWithID]);
}

return (
    <div className="page">
    {/* Masthead goes here */}
    <Masthead />
    <div className="collection">
      {/*deck map goes here */}
      {/*use ItemCard componaent in loop */}
      {movies.map((nolanMovies) => {
        return (
          <ItemCard key={nolanMovies.id} 
          deleteFn={deleteCard}
          duplicateFn={duplicateCard}
          {...nolanMovies}/>
        )
        })}
    </div>
    <NewMovieForm addCardFn={addCard} />
  </div>
);
}