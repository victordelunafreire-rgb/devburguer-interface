import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api.js';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O nome é Obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter ao menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados ...',
        success: 'Cadastro efetuado com sucesso! 👌',
        error: 'Ops, algo deu errado! Tente novamente. 🤯',
      },
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='logo-devburguer' />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='text' {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor='password'>Confirmar Senha</label>
            <input
              type='password'
              id='password'
              {...register('confirmPassword')}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type='submit'>Criar Conta</Button>
        </Form>
        <p>
          Já possui conta? <a href='link'>Clique aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
}
