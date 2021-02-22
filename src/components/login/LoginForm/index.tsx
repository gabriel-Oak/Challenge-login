import Router from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFieldEvent, LoginFormData } from '../../../interfaces/login';
import { logIn } from '../../../store/login/actions';
import isEmail from '../../../utils/isEmail';
import TextField from '../TextField';
import {
  BottomCaption, Form, FormContainer, Header, PasswordLink, Subheader, SubmitButton,
} from './styles';

const LoginForm: React.FC = () => {
  const { user, loading } = useSelector((store: any) => store.login);
  const dispatch = useDispatch();

  // Using local state just to demonstrate useState hook
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

  const handleClearEmail = () => setForm({
    ...form,
    email: {
      value: '',
      touched: false,
    }
  });

  const handleClearPass = () => setForm({
    ...form,
    password: {
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
    dispatch(logIn(formData));
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

        <TextField
          label="E-MAIL"
          disabled={loading}
          name="email"
          value={form.email.value}
          id="email-field"
          placeholder="user.name@mail.com"
          onChange={handleChange}
          type="email"
          error={form.email.touched ? isEmail(form.email.value) : ''}
          onClear={handleClearEmail}
        />

        <TextField
          label="SENHA"
          disabled={loading}
          name="password"
          value={form.password.value}
          id="password-field"
          placeholder="****"
          type="password"
          onClear={handleClearPass}
          onChange={handleChange}
          error={form.password.touched && !form.password.value
            ? 'Informe uma senha;'
            : ''
          }
        />

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