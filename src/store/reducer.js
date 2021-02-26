import {ActionType} from './action';
import {films} from '../mocks/films';

const SHOWN_MOVIES_ON_START = 8;
const SHOWN_MOVIES_ON_BTN_CLICK = 8;

const getGenresSet = (movies) => {
  const allGenres = [];
  movies.map((movie) => (allGenres.push(Object.values(movie.genre).join(``))));
  const genresSet = Array.from(new Set(allGenres));
  return [`All genres`, ...genresSet];
};

const initialState = {
  activeGenre: `All genres`,
  movies: films,
  filteredMovies: films.slice(0, SHOWN_MOVIES_ON_START),
  genres: getGenresSet(films),
  shownMoviesCount: SHOWN_MOVIES_ON_START,
  isVisibleShowMore: films.length > SHOWN_MOVIES_ON_START && true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.GET_FILTERED_MOVIES:
      return {
        ...state,
        movies: state.activeGenre === `All genres` ? initialState.movies : initialState.movies.filter((film) => (film.genre === action.payload)),
        filteredMovies: state.activeGenre === `All genres` ? initialState.movies.slice(0, SHOWN_MOVIES_ON_START) : initialState.movies.filter((film) => (film.genre === action.payload)).slice(0, SHOWN_MOVIES_ON_START),
        isVisibleShowMore: initialState.movies.filter((film) => (film.genre === action.payload)).length > SHOWN_MOVIES_ON_START || initialState.movies.filter(() => (action.payload === `All genres`)).length > SHOWN_MOVIES_ON_START ? true : false,
        shownMoviesCount: SHOWN_MOVIES_ON_START,
      };
    case ActionType.GET_SHOWN_MOVIES:
      state.shownMoviesCount = state.shownMoviesCount + SHOWN_MOVIES_ON_BTN_CLICK;
      return {
        ...state,
        filteredMovies: state.movies.slice(0, state.shownMoviesCount),
        isVisibleShowMore: state.shownMoviesCount >= state.movies.length ? false : true,
      };
  }
  return state;
};

export {reducer};
