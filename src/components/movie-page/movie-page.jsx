import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory, useParams} from 'react-router-dom';
import {moviePropTypes} from '../../props-validation';
import Header from '../header/header';
import MoviesList from '../movies-list/movies-list';
import Tabs from '../tabs/tabs';
import {addToFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getMovies} from '../../store/data/selectors';
import {getMovie, getMovieStatus} from '../../store/activeMovie/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {fetchMovie} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';

const MoviePage = ({movies, movie, authorizationStatus, onAddToFavoriteBtnClick, onComponentMount, movieStatus}) => {
  const {id} = useParams();
  const history = useHistory();
  if (movieStatus === `ERROR`) {
    return <NotFound />;
  }
  useEffect(() => {
    onComponentMount(id);
  }, [id]);

  return (
    movieStatus === `LOADING`
      ? <LoadingScreen />
      : <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.backgroundImg} alt={movie.title} />
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
                    return (
                      authorizationStatus === AuthorizationStatus.AUTH
                        ? onAddToFavoriteBtnClick(movie.id, Number(!movie.isFavorite))
                        : history.push(AppRoute.LOGIN)
                    );
                  }}>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>

                  {authorizationStatus === AuthorizationStatus.AUTH &&
                    <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">
                      Add review
                    </Link>}

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

            <MoviesList movies={movies.filter((film) => (film.genre === movie.genre && film.id !== movie.id)).slice(0, 4)} />

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
  movies: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired,
  movie: PropTypes.shape(moviePropTypes),
  authorizationStatus: PropTypes.string.isRequired,
  onAddToFavoriteBtnClick: PropTypes.func.isRequired,
  onComponentMount: PropTypes.func.isRequired,
  movieStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  status: getMovieStatus(state),
  movie: getMovie(state),
  movies: getMovies(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddToFavoriteBtnClick(id, status) {
    dispatch(addToFavorite(id, status));
  },
  onComponentMount(id) {
    dispatch(fetchMovie(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
