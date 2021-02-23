import isEmail from "./isEmail";

describe('isEmail Tests', () => {

  it('Should return an error', () => {
    expect(isEmail('hello-i-am-a-beautiful-test'))
      .toBe('Digite um e-mail válido;');
  });

  it('Shouldn\'t return any errors', () => {
    expect(isEmail('spicy_test@wiser.com'))
      .toBeFalsy();
  });

});
