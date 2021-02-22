import { all, put, takeLatest } from 'redux-saga/effects';
import types from './types'
import { clearUser } from '../../services/authService';

function* logOutSaga() {
  clearUser();
  yield put({ type: types.LOG_OUT });
}

function* loginSaga() {
  yield all([
    takeLatest(types.CLEAR_USER, logOutSaga),
  ]);
}

export default loginSaga