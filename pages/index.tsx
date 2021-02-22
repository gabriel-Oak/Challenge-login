import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getUser } from '../src/services/authService';
import { useRouter } from 'next/router'
import theme from '../src/utils/theme';
import GlobalStyles from '../src/utils/globalStyles';
import { startClock } from '../src/store/timer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, setUser } from '../src/store/login/actions';

const Button = styled.button`
  height: 48px;
  color: white;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  width: 200px;
  outline: none;
  cursor: pointer;
  border: none;
  margin: 16px;
  transition: box-shadow 500ms ease-in-out;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    box-shadow: 0px 10px 25px 10px #CF99DB;
  }
`;

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
    dispatch(setUser(getUser()));
  }, [dispatch]);

  const { timer } = useSelector((state: any) => state);
  const { user } = useSelector((state: any) => state.login);

  const router = useRouter();
  
  if (!user && typeof window !== 'undefined' && typeof user !== 'undefined') {
    router.replace('/login');
  }

  const handleQuit = () => dispatch(logOut());

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <div>
        <h1>Bem vindo(a) {user && user.name}</h1>

        <Button onClick={handleQuit}>SAIR</Button>

        <h1>Exemplo de clock com redux</h1>
        {JSON.stringify(timer)}
      </div>
    </ThemeProvider>
  );
}

export default IndexPage
