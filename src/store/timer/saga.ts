import { all, call, delay, put, take } from 'redux-saga/effects';
import types from './types'
import { serverRenderClock } from './actions';

function* runClockSaga() {
  take(types.START_CLOCK);
  while (true) {
    yield put(serverRenderClock());
    yield delay(2000);
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
  ]);
}

export default rootSaga