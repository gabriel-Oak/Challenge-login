import { SyntheticEvent, useState } from 'react';
import { LoginFieldEvent } from '../../interfaces/login';
import isEmail from '../../utils/isEmail';
import { BottomCaption, CloseButton, ErrorLabel, Form, FormContainer, Header, Input, InputContainer, Label, Subheader, SubmitButton } from './styles';

const LoginForm: React.FC = () => {
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

  const handleSubmit = (e: SyntheticEvent) => {
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
  }

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
            name="email"
            value={form.email.value}
            id="email-field"
            placeholder="user.name@mail.com"
            onChange={handleChange}
            type="email"
          />

          <CloseButton onClick={handleClear}>
            <img src="/images/close.svg" alt="clear" height={20} />
          </CloseButton>

          {form.email.touched && isEmail(form.email.value) && (
            <ErrorLabel>{isEmail(form.email.value)}</ErrorLabel>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password-field">SENHA</Label>
          <Input
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

        <SubmitButton type="submit">
          ENTRAR
        </SubmitButton>

        <BottomCaption>
          Esqueceu seu login ou senha? Clique aqui
        </BottomCaption>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;