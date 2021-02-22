import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import {
  ImageContainer, ImageGradient, Main
} from '../components/login/styles';
import GlobalStyles from '../utils/globalStyles';
import LoginForm from '../components/login/LoginForm';

const LoginPage: React.FC = () => (
  <ThemeProvider theme={theme} >
    <GlobalStyles />

    <Main>
      <ImageContainer>
        <ImageGradient />
      </ImageContainer>

      <LoginForm />
    </Main>
  </ThemeProvider>
);

export const getStaticProps = async () => ({
  props: {},
});

export default LoginPage;
