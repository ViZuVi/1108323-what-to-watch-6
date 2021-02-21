import React from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../common';
import {moviePropTypes} from '../../props-validation';

const MovieOverview = ({movie}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRating(movie.rating)}</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>
        <p className="movie-card__director"><strong>{movie.director}</strong></p>
        <p className="movie-card__starring"><strong>{movie.starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
};

export default MovieOverview;
