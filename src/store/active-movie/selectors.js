import {NameSpace} from '../root-reducer';

export const getMovie = (state) => state[NameSpace.ACTIVE_MOVIE].movie;
export const getMovieStatus = (state) => state[NameSpace.ACTIVE_MOVIE].movieStatus;
export const getComments = (state) => state[NameSpace.ACTIVE_MOVIE].comments;
export const getCommentStatus = (state) => state[NameSpace.ACTIVE_MOVIE].commentStatus;
