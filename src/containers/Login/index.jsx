import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='logo-devburguer' />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu<span> Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </InputContainer>

          <InputContainer>
            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a href='link'>Clique aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
}
