import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoginForm from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';
import createMockStore from '../../../utils/createMockStore';
import { UserData } from '../../../interfaces/user';

describe('LoginForm Tests', () => {


  it('Should render correctly', () => {
    const mockStore = createMockStore();
    const store = mockStore({
      login: {
        loading: false,
        user: undefined as unknown as UserData,
      },
      timer: {
        lastUpdate: '123545654',
        light: false,
      },
    });

    const component = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      </Provider>
    );

    expect(component.find('form')).toHaveLength(1);
  });

});
