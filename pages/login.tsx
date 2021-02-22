import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';
import {
  ImageContainer, ImageGradient, Main
} from '../src/components/login/styles';
import GlobalStyles from '../src/utils/globalStyles';
import LoginForm from '../src/components/login/LoginForm';
import { useDispatch } from 'react-redux';
import { setUser } from '../src/store/login/actions';
import { getUser } from '../src/services/authService';
import { useEffect } from 'react';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(getUser()));
  }, [dispatch]);
  
  return (
  <ThemeProvider theme={theme} >
    <GlobalStyles />

    <Main>
      <ImageContainer>
        <ImageGradient />
      </ImageContainer>

      <LoginForm />
    </Main>
  </ThemeProvider>
);}

export const getStaticProps = async () => ({
  props: {},
});

export default LoginPage;
