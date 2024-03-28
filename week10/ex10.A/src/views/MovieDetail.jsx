// MovieDetail.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import './MovieDetail.css';

export function MovieDetail({ data }) {
  const { id } = useParams();
  const selectedMovie = data.find((movie) => movie.id === id);

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movieDetail">
      <Link to="/" className="backButton">Back</Link>
      <h1>{selectedMovie.title}</h1>
      <img src={selectedMovie.image} alt={selectedMovie.title} />
      <p>Year: {selectedMovie.year}</p>
      <p>Actors: {selectedMovie.actors}</p>
      <p>Rating: {selectedMovie.rating}</p>
      <p>Plot Summary: {selectedMovie.plotSummary}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  data: PropTypes.array,
};
