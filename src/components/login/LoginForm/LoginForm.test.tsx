import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoginForm from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';
import createMockStore from '../../../utils/createMockStore';

describe('LoginForm Tests', () => {
  

  it('Should render correctly', () => {
    const store = createMockStore();
    
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
