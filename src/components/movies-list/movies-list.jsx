import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {moviePropTypes} from '../../props-validation';

const MoviesList = ({films}) => {
  return (

    <div className="catalog__movies-list">
      {films.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}

    </div>

  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired
};

export default MoviesList;
