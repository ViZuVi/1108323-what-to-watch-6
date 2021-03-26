import {combineReducers} from 'redux';
import {data} from './data/data';
import {activeMovie} from './activeMovie/activeMovie';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  ACTIVE_MOVIE: `ACTIVE_MOVIE`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.ACTIVE_MOVIE]: activeMovie,
  [NameSpace.USER]: user,
});
