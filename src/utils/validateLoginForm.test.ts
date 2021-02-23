import validateLoginForm from "./validateLoginForm";

describe('validadeLoginForm', () => {

  it('Should catch when password not provided', () => {
    expect(validateLoginForm({
      email: 'helloword@jsx.com',
      password: undefined as unknown as string,
    })).toBeFalsy();
  });

  it('Should catch when email not provided', () => {
    expect(validateLoginForm({
      email: undefined as unknown as string,
      password: 'senhaforte',
    })).toBeFalsy();
  });

  it('Should catch when email isn\'t valid', () => {
    expect(validateLoginForm({
      email: 'fake.mail',
      password: 'strongpassword',
    })).toBeFalsy();
  });

  it('Should pass', () => {
    expect(validateLoginForm({
      email: 'rock-it-baby@lol.com',
      password: '1234'
    })).toBeTruthy();
  });

});