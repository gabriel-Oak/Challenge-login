import { mount } from "enzyme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import toJson from 'enzyme-to-json';
import LoginPage from "../../pages/login";
import createMockStore from "../utils/createMockStore";
import theme from "../utils/theme";
import { UserData } from "../interfaces/user";


describe('Login Page Tests', () => {

  it('Should Match Snapshot', () => {
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
          <LoginPage />
        </ThemeProvider>
      </Provider>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

});