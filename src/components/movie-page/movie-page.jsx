import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {moviePropTypes, reviewPropTypes} from '../../props-validation';
import Header from '../header/header';
// import MoviesList from '../movies-list/movies-list';
import Tabs from '../tabs/tabs';
import {addToFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';

const MoviePage = ({movie, authorizationStatus, onAddToFavoriteBtnClick}) => {

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImg} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`/player/${movie.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                  onAddToFavoriteBtnClick(movie.id, Number(!movie.isFavorite));
                }}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                {authorizationStatus === `AUTH` && <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">Add review</Link>}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.posterImg} alt={movie.title} width="218" height="327" />
            </div>
            <Tabs movie = {movie} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {/* <MoviesList films={films.filter((film) => (film.genre === movie.genre && film.id !== movie.id)).slice(0, 4)} /> */}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  // films: PropTypes.arrayOf(
  //     PropTypes.shape(moviePropTypes).isRequired,
  // ).isRequired,
  movie: PropTypes.shape(moviePropTypes).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  ),
  authorizationStatus: PropTypes.string.isRequired,
  onAddToFavoriteBtnClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAddToFavoriteBtnClick(id, status) {
    dispatch(addToFavorite(id, status));
  }
});

export {MoviePage};
export default connect(null, mapDispatchToProps)(MoviePage);
