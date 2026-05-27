import styled from 'styled-components';

export const Container = styled.footer`
    height: 50px;
    background-color: ${(props) => props.theme.darkPurple};
    width: 100vw;
    display: flex;
        justify-content: center;
        align-items: center;

    p {
        color: ${(props) => props.theme.white};
        font-size: 14px;
        font-weight: lighter;
    }
`;
