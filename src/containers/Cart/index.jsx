import Logo from '../../assets/logo.svg';
import { CartItens } from '../../components/CartItens';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt='Logo do DevBurguer' />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItens />
        {/* <CartResume /> */}
      </Content>
    </Container>
  );
}
