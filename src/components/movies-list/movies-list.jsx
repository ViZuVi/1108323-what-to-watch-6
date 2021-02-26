import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {moviePropTypes} from '../../props-validation';

const MoviesList = ({movies}) => {
  return (

    <div className="catalog__movies-list">
      {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
    </div>

  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired
};

export default MoviesList;
