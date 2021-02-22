import Router from 'next/router';
import { SyntheticEvent, useEffect, useState } from 'react';
import { LoginFieldEvent, LoginFormData } from '../../../interfaces/login';
import { UserData } from '../../../interfaces/user';
import apiService from '../../../services/apiService';
import { getUser, storeUser } from '../../../services/authService';
import isEmail from '../../../utils/isEmail';
import validateLoginForm from '../../../utils/validateLoginForm';
import { BottomCaption, CloseButton, ErrorLabel, Form, FormContainer, Header, Input, InputContainer, Label, PasswordLink, Subheader, SubmitButton } from './styles';

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null as unknown as UserData);
  const [form, setForm] = useState({
    email: {
      value: '',
      touched: false,
    },
    password: {
      value: '',
      touched: false,
    },
  });

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleClear = () => setForm({
    ...form,
    email: {
      value: '',
      touched: false,
    }
  });

  const handleChange = (e: LoginFieldEvent) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        touched: true,
      },
    });
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setForm({
      email: {
        value: form.email.value,
        touched: true,
      },
      password: {
        value: form.password.value,
        touched: true,
      },
    });
    
    const formData: LoginFormData = {
      email: form.email.value,
      password: form.password.value,
    }

    if (!validateLoginForm(formData)) return;
    
    setLoading(true);

    try {
      const { data: user } = await apiService.post<UserData>('/login', formData);

      setUser(user);
      storeUser(user);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  if (!!user) Router.replace('/');

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Header>
          Olá, seja bem-vindo!
        </Header>

        <Subheader>
          Para acessar a plataforma, faça seu login.
        </Subheader>

        <InputContainer>
          <Label htmlFor="email-field">E-MAIL</Label>
          <Input
            disabled={loading}
            name="email"
            value={form.email.value}
            id="email-field"
            placeholder="user.name@mail.com"
            onChange={handleChange}
            type="email"
          />

          <CloseButton onClick={handleClear} type="button">
            <img src="/images/close.svg" alt="clear" height={20} />
          </CloseButton>

          {form.email.touched && isEmail(form.email.value) && (
            <ErrorLabel>{isEmail(form.email.value)}</ErrorLabel>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password-field">SENHA</Label>
          <Input
            disabled={loading}
            name="password"
            value={form.password.value}
            id="password-field"
            placeholder="****" type="password"
            onChange={handleChange}
          />

          {form.password.touched && !form.password.value && (
            <ErrorLabel>Informe uma senha;</ErrorLabel>
          )}
        </InputContainer>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'ENTRANDO...' : 'ENTRAR'}
        </SubmitButton>

        <BottomCaption>
          {'Esqueceu seu login ou senha? Clique '}
          
          <PasswordLink href="/password-recovery">
            aqui
          </PasswordLink>
        </BottomCaption>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;