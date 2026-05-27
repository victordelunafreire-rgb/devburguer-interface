import { ShoppingCart, UserCircle } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();

  const { pathname } = useResolvedPath();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  console.log(userInfo);

  return (
    <Container>
      <Content>
        <Navigation>
          ${(props) => props.theme.white}
          <div>
            <HeaderLink to='/' $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle
              color='${(props) => props.theme.white}'
              size={24}
              weight='thin'
            />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color='#fff' size={24} weight='thin' />
            <HeaderLink to='/carrinho' $isActive={pathname === '/carrinho'}>
              Meu carrinho
            </HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
