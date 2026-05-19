import { ShoppingCart, UserCircle } from "@phosphor-icons/react";
import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./styles";

export function Header(){
    return (
        <Container>
            <Content>
        <Navigation>
            <div>
               <HeaderLink>Home</HeaderLink> 
                <HeaderLink>Cardápio</HeaderLink>
            </div>
        </Navigation>
        <Options>
            <Profile>
                <UserCircle color="#fff" size={24} weight="thin" />
                <div>
                    <p>Olá, <span>John!</span></p>
                    <Logout>Sair</Logout>
                </div>
            </Profile>
        <LinkContainer>
        <ShoppingCart color="#fff" size={24} weight="thin" />
        <HeaderLink>Meu carrinho</HeaderLink>
        </LinkContainer>
        </Options>
        </Content>
        </Container>
    )
}