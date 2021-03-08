import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from '../const';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(AppRoute.MOVIES)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(AppRoute.LOGIN)
//     .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)))
//     .catch(() => {})
// );

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.getUserInfo(data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.getUserInfo(data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
);

// export const getUser = () => (dispatch, _getState, api) => (
//   api.get(AppRoute.LOGIN)
//     .then(({data}) => dispatch(ActionCreator.getUserInfo(data)))
// );

export const postComment = ({movieId, rating, comment}) => (_dispatch, _getState, api) => (
  api.post(`/comments/${movieId}`, {rating, comment})
);

export const loadComments = (movieId) => (dispatch, _getState, api) => (
  api.get(`/comments/${movieId}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.getUserInfo({})))
);


// export const logout = () => (dispatch, _getState, api) => (
//   api.get(AppRoute.LOGOUT)
//     .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)))
// );
