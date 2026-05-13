import { Banner, CategoriesMenu, Container, ProductsContainer } from './styles';

export function Menu() {
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoriesMenu></CategoriesMenu>

      <ProductsContainer></ProductsContainer>
    </Container>
  );
}
