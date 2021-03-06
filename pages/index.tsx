import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { getUser } from '../src/services/authService';
import { useRouter } from 'next/router'
import theme from '../src/utils/theme';
import GlobalStyles from '../src/utils/globalStyles';
import { startClock } from '../src/store/timer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, setUser } from '../src/store/login/actions';
import { Button, Container } from '../src/components/home/styles';
import { StoreState } from '../src/interfaces/store';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
    dispatch(setUser(getUser()));
  }, [dispatch]);

  const { timer } = useSelector((state: StoreState) => state);
  const { user } = useSelector((state: StoreState) => state.login);

  const router = useRouter();
  
  if (!user && typeof window !== 'undefined' && typeof user !== 'undefined') {
    router.replace('/login');
  }

  const handleQuit = () => dispatch(logOut());

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Container>
        <h1>Bem vindo(a) {user && user.name}</h1>

        <Button onClick={handleQuit}>SAIR</Button>

        <h1>Exemplo de clock com redux</h1>
        {JSON.stringify(timer)}
      </Container>
    </ThemeProvider>
  );
}

export default IndexPage
