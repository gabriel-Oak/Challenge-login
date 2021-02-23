import { useMemo } from 'react'
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { StoreState, StoreType } from '../interfaces/store';
import loginSaga from './login/saga';

import reducers from './reducers'
import timerSaga from './timer/saga'

let store: StoreType;

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function initStore(initialState: StoreState, middleware: any) {
  return createStore(
    reducers,
    initialState,
    middleware,
  )
}

export const initializeStore = (preloadedState: StoreState) => {
  const sagaMiddleware = createSagaMiddleware();
  let _store = store ?? initStore(preloadedState, bindMiddleware([sagaMiddleware]));

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    }, sagaMiddleware);

    store = undefined as unknown as StoreType;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  store.sagaTask = sagaMiddleware.run(timerSaga);
  store.sagaTask = sagaMiddleware.run(loginSaga);

  return _store;
}

export function useStore(initialState: StoreState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}