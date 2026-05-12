import styled from 'styled-components';

export const Container = styled.div`
  .mySwiperCategories {
    padding-right: 40px;
  }
  overflow-x: hidden; /* aqui nós deixamos o background escondendo no eixo horizontal o restante do carrosel */

  .mySwiperCategories {
    overflow: visible; /*aqui nós permitimios que a imagem vaze no eixo vertical para criar efeito 3D */
  }

  padding-left: 40px;
  padding-bottom: 40px;

  .swiper-button-next,
  .swiper-button-prev {
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &::after {
      font-size: 20px;
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-next :hover,
  .swiper-button-prev :hover {
    background-color: rgba(0, 0, 0, 0.8)
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61A120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61A120;
    left: calc(50% - 28px);
  }
`;
