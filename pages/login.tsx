import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';
import {
  ImageContainer, ImageGradient, Main
} from '../src/components/login/styles';
import GlobalStyles from '../src/utils/globalStyles';
import LoginForm from '../src/components/login/LoginForm';

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
