import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { StoreState, StoreType } from '../interfaces/store';

const createMockStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store: (initialState: StoreState) => StoreType = configureStore(middlewares);

  return store;
};

export default createMockStore;