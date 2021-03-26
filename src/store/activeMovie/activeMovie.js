import {ActionType} from '../action';
import {adaptMovie} from '../../adapters/films';

const initialState = {
  movie: {},
  movieStatus: `LOADING`,
  comments: [],
  commentStatus: `PENDING`,
};

const activeMovie = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING_STATUS:
      return {
        ...state,
        movieStatus: action.payload,
      };
    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        movie: adaptMovie(action.payload),
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.SET_COMMENT_STATUS:
      return {
        ...state,
        commentStatus: action.payload,
      };
  }
  return state;
};

export {activeMovie};
