import { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from '../../services/api';
import { CategoryButton, Container, ContainerItems, Title } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    690: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <Container>
      <Title>Categorias</Title>

      <Swiper
        modules={[Navigation, Pagination]}
        loop={categories.length > 4}
        grabCursor={true}
        breakpoints={swiperBreakpoints}
        navigation={{ clickable: true }}
        className='mySwiperCategories'
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <ContainerItems imageurl={category.url}>
              <CategoryButton
                onClick={() => {
                  navigate({
                    pathname: '/cardapio',
                    search: `?categoria=${category.id}`,
                  });
                }}
              >
                {category.name}
              </CategoryButton>
            </ContainerItems>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
