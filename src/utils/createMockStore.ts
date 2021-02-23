import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { StoreType } from '../interfaces/store';

const createMockStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store: StoreType = configureStore(middlewares) as unknown as StoreType;
  
  Object.assign(store, {
    getState: jest.fn(() => ({
      login: {},
      timer: {},
    })),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  });

  return store;
};

export default createMockStore;