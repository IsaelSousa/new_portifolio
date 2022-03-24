import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;

    background: linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%);
    background: linear-gradient(#042B47, #09A3B1);

    h1 {
        display: flex;
        justify-content: center;
        margin-top: 2rem;

        font-family: 'Ubuntu';
        font-weight: 700;
        font-size: 24pt;
        color: white;
        text-shadow: 1px 1px 2px black;
    }
    p {
        display: flex;
        justify-content: center;

        color: white;
        font-weight: 700;
        font-family: 'Ubuntu', sans-serif;
        font-size: 18pt;
        p {
            margin-left: 8px;
            padding-left: 5px;
            padding-right: 5px;
            background: rgb(251,147,1);
            background: linear-gradient(51deg, rgba(251,147,1,1) 0%, rgba(102,59,1,1) 100%);
            border-radius: 10px;
        }
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 2rem;
        width: 100vw;
        background: rgba(0,0,0, 0.4);
        position: fixed;
        bottom: 0;

        span {
        color: white;
        font-family: 'Ubuntu', sans-serif;
        font-size: 13pt;
        }
    }

    @media(max-width: 720px){
        footer {
            height: 5vh;

            span {
                font-size: 10pt;
            }
        }
    }
`;

const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    flex-direction: column;
    transition: 400ms;

`

export { Container, ItemsContainer };
