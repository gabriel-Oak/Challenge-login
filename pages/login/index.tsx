import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import {
  ImageContainer, ImageGradient, Main
} from './styles';
import GlobalStyles from '../../utils/globalStyles';
import LoginForm from '../../components/LoginForm';

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


export default LoginPage;

export const getStaticProps = async () => ({
  props: {},
});