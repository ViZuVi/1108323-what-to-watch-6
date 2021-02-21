import React from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../props-validation';

const getTime = (time) => {
  let hours = Math.floor(time / 60);
  let minuts = time % 60;
  return minuts !== 0 ? `${hours}h ${minuts}m` : `${hours}h`;
};

const MovieDetails = ({movie}) => {
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{movie.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {movie.starring.map((actor, i) => {
              return (
                <span key={actor + i}>
                  <span>{i !== movie.starring.length - 1 ? `${actor}, ` : actor}</span>
                  <br />
                </span>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getTime(movie.runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{movie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{movie.released}</span>
        </p>
      </div>
    </div>

  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
};

export default MovieDetails;
