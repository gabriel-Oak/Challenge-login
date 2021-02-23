import { mount } from "enzyme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import toJson from 'enzyme-to-json';
import createMockStore from "../utils/createMockStore";
import theme from "../utils/theme";
import PasswordRecvery from "../../pages/password-recovery";


describe('PasswordRecovery Page Tests', () => {

  it('Should Match Snapshot', () => {
    const store = createMockStore();
    
    const component = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PasswordRecvery />
        </ThemeProvider>
      </Provider>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

});