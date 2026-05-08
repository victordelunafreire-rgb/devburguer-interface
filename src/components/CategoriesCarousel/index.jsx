import { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from '../../services/api';
import { Container, ContainerItens, Title } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

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
            <ContainerItens imageurl={category.url}>
              <p>{category.name}</p>
            </ContainerItens>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
