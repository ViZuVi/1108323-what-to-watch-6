import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';
import {adaptAuthInfo} from '../../adapters/authInfo';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_INFO:
      return {
        ...state,
        userInfo: adaptAuthInfo(action.payload),
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }
  return state;
};

export {user};
