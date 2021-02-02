import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({movies}) => {
  return (

    <div className="catalog__movies-list">
      {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}

    </div>

  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired
};

export default MoviesList;
