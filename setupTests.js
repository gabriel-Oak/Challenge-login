import "@testing-library/jest-dom/extend-expect";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


Object.assign(window.localStorage, {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
});