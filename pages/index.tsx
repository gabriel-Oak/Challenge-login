import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { UserData } from '../src/interfaces/user';
import { clearUser, getUser } from '../src/services/authService';
import { useRouter } from 'next/router'
import theme from '../src/utils/theme';
import GlobalStyles from '../src/utils/globalStyles';

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
  const router = useRouter();
  const [user, setUser] = useState(undefined as unknown as UserData);

  useEffect(() => {
    setUser(getUser());
  }, []);

  if (!user && typeof window !== 'undefined' && typeof user !== 'undefined') {
    router.replace('/login');
  }

  const handleQuit = () => {
    clearUser();
    setUser(null as unknown as UserData);
  }

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />

      <div>
        <h1>Bem vindo ao sistema: {user && user.name}</h1>

        <Button onClick={handleQuit}>SAIR</Button>
      </div>
    </ThemeProvider>
  );
}

export const getStaticProps = async () => ({
  props: {},
});

export default IndexPage
