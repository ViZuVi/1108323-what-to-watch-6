import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../props-validation';
import Videoplayer from '../videoplayer/videoplayer';

const TIMEOUT = 1000;

const MovieCard = ({movie}) => {
  const [activeMovie, setActiveMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoTimeout = setTimeout(() => {
      if (activeMovie) {
        setIsPlaying(true);
      }
    }, TIMEOUT);
    return () => {
      clearTimeout(videoTimeout);
    };
  }, [activeMovie]);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        setActiveMovie(movie);

      }}
      onMouseOut={(evt) => {
        evt.preventDefault();
        setActiveMovie(null);
        setIsPlaying(false);
      }}
    >
      <Link to={`/films/${movie.id}`}>
        <div className="small-movie-card__image">
          {isPlaying ? <Videoplayer movie={movie} isPlaying={isPlaying} /> : <img src={movie.previewImg} alt="Shutter Island" width="280" height="175" />}
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${movie.id}`}>{movie.title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
};

export default MovieCard;
