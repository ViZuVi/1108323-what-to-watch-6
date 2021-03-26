import {loadMovies, loadMovie, loadPromoMovie, getUserInfo, requiredAuthorization, loadComments, loadFavoriteFilms, setLoadingStatus, setCommentStatus} from './action';
import {AuthorizationStatus, AppRoute} from '../const';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(AppRoute.MOVIES)
    .then(({data}) => dispatch(loadMovies(data)))
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
  .then(({data}) => dispatch(loadMovie(data)))
  .then(() => dispatch(setLoadingStatus(`LOADED`)))
  .then(() => dispatch(setCommentStatus(`PENDING`)))
  .catch(() => dispatch(setLoadingStatus(`ERROR`)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(AppRoute.PROMO_MOVIE)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => dispatch(getUserInfo(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(getUserInfo(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchFavoriteMovies()))
);

export const postComment = ({movieId, rating, comment}) => (dispatch, _getState, api) => {
  dispatch(setCommentStatus(`SENDING`));
  return api.post(`/comments/${movieId}`, {rating, comment})
    .then(() => dispatch(setCommentStatus(`SENT`)))
    .catch(() => dispatch(setCommentStatus(`ERROR`)));
};

export const fetchComments = (movieId) => (dispatch, _getState, api) => (
  api.get(`/comments/${movieId}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT)
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(getUserInfo({})))
);

export const addToFavorite = (movieId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${movieId}/${status}`, {movieId, status})
  .then(() => dispatch(fetchFavoriteMovies()))
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteFilms(data)))
);

