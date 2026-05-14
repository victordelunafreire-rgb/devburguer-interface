import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardProducts } from '../../components/CardProducts';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Banner,
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductsContainer,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  // Trecho oldScholl - acaba por forçar o navegador a renderizar toda a tela sempre que acionado
  // useEffect(() => {
  //   if (activeCategory === 0) {
  //     setFilteredProducts(products);
  //   } else {
  //     const newFilteredProducts = products.filter(
  //       (product) => product.category_id === activeCategory,
  //     );

  //     setFilteredProducts(newFilteredProducts);
  //   }
  // }, [products, activeCategory]);

  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter((product) => product.category_id === activeCategory);

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
      <CategoriesMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProducts product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
