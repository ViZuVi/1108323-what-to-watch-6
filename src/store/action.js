export const ActionType = {
  CHANGE_GENRE: `/changeGenre`,
  GET_FILTERED_MOVIES: `/getFilteredMovies`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilteredMovies: (genre) => ({
    type: ActionType.GET_FILTERED_MOVIES,
    payload: genre,
  })
};
