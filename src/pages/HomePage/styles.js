import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;

    background: linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%);
    background: linear-gradient(#042B47, #09A3B1);

    nav {
        width: 100vw;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.06);

        h1 {
            color: white;
            font-family: 'Ubuntu';
            font-weight: 300;
            size: 64px;
            padding-left: 43px;
            text-shadow: 1px 1px 2px black;
        }
    }
`;

const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    flex-direction: column;
`

export { Container, ItemsContainer };
