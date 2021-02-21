import { BottomCaption, Form, FormContainer, Header, Input, Label, Subheader, SubmitButton } from './styles';

const LoginForm: React.FC = () => {
  const handleSubmit = (e : any) => {
    console.log(e);
    
    e.preventDefault();
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
        
        <Label htmlFor="email-field">E-MAIL</Label>
        <Input name="email" id="email-field" placeholder="user.name@mail.com" />
  
        <Label htmlFor="email-field">SENHA</Label>
        <Input name="pass" id="pass-field" placeholder="****"  type="password"/>
  
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