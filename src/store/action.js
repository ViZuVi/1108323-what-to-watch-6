export const ActionType = {
  CHANGE_GENRE: `/changeGenre`,
  GET_FILTERED_MOVIES: `/getFilteredMovies`,
  GET_SHOWN_MOVIES: `/getShownMovies`,
  LOAD_MOVIES: `/loadMovies`,
  REQUIRED_AUTHORIZATION: `/requiredAuthorization`,
  GET_USER_INFO: `/getUserInfo`,
  LOAD_COMMENTS: `/loadComments`,
  LOAD_PROMO_MOVIE: `/loadPromoMovie`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilteredMovies: (genre) => ({
    type: ActionType.GET_FILTERED_MOVIES,
    payload: genre,
  }),
  getShownMovies: () => ({
    type: ActionType.GET_SHOWN_MOVIES,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getUserInfo: (userInfo) => ({
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  })
};
