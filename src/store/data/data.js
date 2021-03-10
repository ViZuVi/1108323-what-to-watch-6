import {ActionType} from '../action';
import {adaptMovies} from '../../adapters/films';
import {adaptPromo} from '../../adapters/promo';

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
  filteredMovies: [],
  genres: [],
  shownMoviesCount: SHOWN_MOVIES_ON_START,
  isVisibleShowMore: false,
  isDataLoaded: false,
  comments: [],
  promoMovie: {},
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      const adaptedPromo = adaptPromo(action.payload);
      return {
        ...state,
        promoMovie: adaptedPromo,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
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

export {data};
