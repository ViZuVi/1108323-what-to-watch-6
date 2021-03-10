import {loadMovies, loadPromoMovie, getUserInfo, requiredAuthorization, loadComments} from './action';
import {AuthorizationStatus, AppRoute} from '../const';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(AppRoute.MOVIES)
    .then(({data}) => dispatch(loadMovies(data)))
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
);

export const postComment = ({movieId, rating, comment}) => (_dispatch, _getState, api) => (
  api.post(`/comments/${movieId}`, {rating, comment})
);

export const fetchComments = (movieId) => (dispatch, _getState, api) => (
  api.get(`/comments/${movieId}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT)
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(getUserInfo({})))
);

