import { all, put, takeLatest } from 'redux-saga/effects';
import types from './types'
import { clearUser, storeUser } from '../../services/authService';
import validateLoginForm from '../../utils/validateLoginForm';
import { ActionType } from '../../interfaces/redux';
import apiService from '../../services/apiService';
import { UserData } from '../../interfaces/user';
import { setUser } from './actions';
import Swal from 'sweetalert2';

function* logOutSaga() {
  clearUser();
  yield put({ type: types.LOG_OUT });
}

function* logInSaga({ payload }: ActionType) {
  if (validateLoginForm(payload)) {
    yield put({ type: types.LOG_IN_REQUEST });

    try {
      const { data: user } = yield apiService.post<UserData>('/login', payload);

      yield put(setUser(user));
      storeUser(user);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    }

    yield put({ type: types.LOG_IN_DONE });
  }
}

function* loginSaga() {
  yield all([
    takeLatest(types.CLEAR_USER, logOutSaga),
    takeLatest(types.LOG_IN, logInSaga),
  ]);
}

export default loginSaga