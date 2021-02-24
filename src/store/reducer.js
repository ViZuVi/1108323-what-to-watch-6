import {ActionType} from './action';
import {films} from '../mocks/films';

const getGenresSet = (movies) => {
  const allGenres = [];
  movies.map((movie) => (allGenres.push(Object.values(movie.genre).join(``))));
  const genresSet = Array.from(new Set(allGenres));
  return [`All genres`, ...genresSet];
};

const initialState = {
  activeGenre: `All genres`,
  movies: films,
  filteredMovies: films,
  genres: getGenresSet(films),
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
        filteredMovies: initialState.movies.filter((film) => (film.genre === action.payload)),
      };
  }
  return state;
};

export {reducer};
