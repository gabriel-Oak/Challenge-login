
import { ActionType } from '../../interfaces/redux';
import { UserData } from '../../interfaces/user';
import types from './types';

const initialTimerState = {
  user: undefined as unknown as UserData,
  loading: false,
}

const login = (state = initialTimerState, { type, payload }: ActionType) => {
  switch (type) {
    case types.SET_USER:
      return {
        ...state,
        user: payload,
      };

    case types.LOG_OUT:
      return {
        ...state,
        user: null as unknown as UserData,
      };

    case types.LOG_IN_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.LOG_IN_DONE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state;
  }
}

export default login;