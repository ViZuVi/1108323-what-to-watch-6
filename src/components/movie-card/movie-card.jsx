import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../props-validation';

const MovieCard = ({movie}) => {
  // eslint-disable-next-line no-unused-vars
  const [activeMovie, setActiveMovie] = useState(null);

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => setActiveMovie(movie.id)}>
      <Link to={`/films/${movie.id}`}>
        <div className="small-movie-card__image">
          <img src={movie.previewImg} alt="Shutter Island" width="280" height="175" />
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
