import { FC } from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';

interface Props {
  Component: any,
  pageProps: any,
}

const App: FC<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;