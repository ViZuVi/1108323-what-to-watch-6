import {NameSpace} from '../root-reducer';

export const getActivegenre = (state) => state[NameSpace.DATA].activeGenre;
export const getInitMovies = (state) => state[NameSpace.DATA].initMovies;
export const getMovies = (state) => state[NameSpace.DATA].movies;
export const getFilteredMovies = (state) => state[NameSpace.DATA].filteredMovies;
export const getGenres = (state) => state[NameSpace.DATA].genres;
export const getShownMoviesCount = (state) => state[NameSpace.DATA].shownMoviesCount;
export const getIsVisibleShowMore = (state) => state[NameSpace.DATA].isVisibleShowMore;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
