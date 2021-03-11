export const ActionType = {
  CHANGE_GENRE: `/changeGenre`,
  GET_FILTERED_MOVIES: `/getFilteredMovies`,
  GET_SHOWN_MOVIES: `/getShownMovies`,
  LOAD_MOVIES: `/loadMovies`,
  REQUIRED_AUTHORIZATION: `/requiredAuthorization`,
  GET_USER_INFO: `/getUserInfo`,
  LOAD_COMMENTS: `/loadComments`,
  LOAD_PROMO_MOVIE: `/loadPromoMovie`,
  LOAD_FAVORITE_FILMS: `/loadFavoriteFilms`
};

export const loadFavoriteFilms = (films) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: films,
});

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const getFilteredMovies = (genre) => ({
  type: ActionType.GET_FILTERED_MOVIES,
  payload: genre,
});

export const getShownMovies = () => ({
  type: ActionType.GET_SHOWN_MOVIES,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const getUserInfo = (userInfo) => ({
  type: ActionType.GET_USER_INFO,
  payload: userInfo,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie,
});
