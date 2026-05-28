import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .mySwiperCategories {
    padding-right: 40px;
  }

  padding-left: 40px;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.white}FFF;
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
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom:40px;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageurl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  cursor: grab;

`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    margin-top: 50px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
`;
