import { LoginFormData } from "../../interfaces/login";
import { UserData } from "../../interfaces/user";
import { logIn, logOut, setUser } from "./actions";
import types from "./types";

describe('Login Actions Tests', () => {

  it('Should set user', () => {
    const user: UserData = {
      email: 'test@eje.com',
      id: 45,
      name: 'Testenildo Silveira',
    };

    expect(setUser(user)).toEqual({
      type: types.SET_USER,
      payload: user,
    });
  });

  it('Should log out', () => {
    expect(logOut()).toEqual({
      type: types.CLEAR_USER,
    });
  });

  it('Should log in', () => {
    const form: LoginFormData = {
      email: 'dsassasd@tes.com',
      password: '56as65s'
    };
    
    expect(logIn(form)).toEqual({
      type: types.LOG_IN,
      payload: form,
    });
  });

});