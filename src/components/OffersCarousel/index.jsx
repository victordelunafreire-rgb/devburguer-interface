import { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from '../../services/api';
import { Container, Title } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CardProducts } from '../CardProducts';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data.filter((product) => product.offer);

      setOffers(onlyOffers);
    }

    loadProducts();
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
      <Title>Ofertas do Dia</Title>

      <Swiper
        modules={[Navigation, Pagination]}
        loop={offers.length > 4}
        grabCursor={true}
        breakpoints={swiperBreakpoints}
        navigation={{ clickable: true }}
        className='mySwiperCategories'
      >
        {offers.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProducts product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
