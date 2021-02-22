
import { ActionType } from '../../interfaces/redux';
import { UserData } from '../../interfaces/user';
import types from './types';

const initialTimerState = {
  user: undefined as unknown as UserData,
}

const login = (state = initialTimerState, { type, payload }: ActionType) => {
  switch (type) {
    case types.SET_USER:
      return {
        ...state,
        user: payload,
      }

    case types.LOG_OUT:
      return {
        ...state,
        user: null as unknown as UserData,
      }

    default:
      return state;
  }
}

export default login;