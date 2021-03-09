import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moviePropTypes} from '../../props-validation';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import GenresList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';

const Main = ({promoMovie, filteredMovies, isVisibleShowMore}) => {

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.backgroundImg} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.posterImg} alt={promoMovie.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList movies={filteredMovies} />

          {isVisibleShowMore && <ShowMore />}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

const mapStateToProps = (state) => ({
  filteredMovies: state.filteredMovies,
  shownMovies: state.shownMovies,
  isVisibleShowMore: state.isVisibleShowMore,
  promoMovie: state.promoMovie,
});

Main.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    posterImg: PropTypes.string.isRequired,
  }).isRequired,
  filteredMovies: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ),
  isVisibleShowMore: PropTypes.bool.isRequired,
};

export {Main};
export default connect(mapStateToProps, null)(Main);
