import { combineReducers } from 'redux'
import timer from './timer/reducer';
import login from './login/reducer';

const reducers = {
  timer,
  login,
}

export default combineReducers(reducers);