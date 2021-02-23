import { shallow } from 'enzyme';
import TextField from '.';
import { LoginFieldEvent } from '../../../interfaces/login';

describe('TextField Tests', () => {

  it('Should render correctly', () => {
    const component = shallow(
      <TextField 
        label="Half Name"
        id="half-name"
        name="name"
        onChange={jest.fn()}
        value="Crist Ron"
      />
    );

    expect(component.find('#half-name')).toHaveLength(1);
  });


  it('Should change value', () => {
    const handleChange = jest.fn();

    const component = shallow(
      <TextField 
        label="Half Name"
        id="half-name"
        name="name"
        onChange={handleChange as unknown as (e: LoginFieldEvent) => void}
        value="Crist Ron"
      />
    );

    component.find('#half-name').simulate('change', { target: { value: 'abcdefg'} });
    expect(handleChange).toHaveBeenCalled();
  });

});

export {};