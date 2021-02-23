import { mount } from "enzyme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import toJson from 'enzyme-to-json';
import createMockStore from "../utils/createMockStore";
import theme from "../utils/theme";
import IndexPage from "../../pages";


describe('Index Page Tests', () => {

  it('Should Match Snapshot', () => {
    const store = createMockStore();
    
    const component = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <IndexPage />
        </ThemeProvider>
      </Provider>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

});