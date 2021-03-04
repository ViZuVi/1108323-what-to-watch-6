import {ActionType} from './action';
// import {films} from '../mocks/films';
import {AuthorizationStatus} from '../const';
import {adaptMovies} from '../adapters/films';

const SHOWN_MOVIES_ON_START = 8;
const SHOWN_MOVIES_ON_BTN_CLICK = 8;

const getGenresSet = (movies) => {
  const allGenres = movies.map(({genre}) => genre);
  return [`All genres`, ...[...new Set(allGenres)]];
};

const initialState = {
  activeGenre: `All genres`,
  initMovies: [],
  movies: [],
  filteredMovies: [], // films.slice(0, SHOWN_MOVIES_ON_START)
  genres: [], // getGenresSet(films),
  shownMoviesCount: SHOWN_MOVIES_ON_START,
  isVisibleShowMore: false, // films.length > SHOWN_MOVIES_ON_START && true
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      const adaptedMovies = adaptMovies(action.payload);
      return {
        ...state,
        initMovies: adaptedMovies,
        movies: adaptedMovies,
        filteredMovies: adaptedMovies.slice(0, SHOWN_MOVIES_ON_START),
        genres: getGenresSet(adaptedMovies),
        isVisibleShowMore: adaptedMovies.length > SHOWN_MOVIES_ON_START && true,
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.GET_FILTERED_MOVIES: {
      const filteredFilms = state.activeGenre === `All genres`
        ? state.initMovies
        : state.initMovies.filter((film) => (film.genre === action.payload));

      const isVisibleShowMore = filteredFilms.length > SHOWN_MOVIES_ON_START;

      return {
        ...state,
        movies: filteredFilms,
        filteredMovies: filteredFilms.slice(0, SHOWN_MOVIES_ON_START),
        isVisibleShowMore,
      };
    }
    case ActionType.GET_SHOWN_MOVIES: {
      const shownMoviesCount = state.filteredMovies.length + SHOWN_MOVIES_ON_BTN_CLICK;

      return {
        ...state,
        filteredMovies: state.movies.slice(0, shownMoviesCount),
        isVisibleShowMore: shownMoviesCount < state.movies.length,
      };
    }
  }
  return state;
};

export {reducer};
