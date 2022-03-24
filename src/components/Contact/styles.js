import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  margin-bottom: 2rem;

  h2 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }
`;

const AllItems = styled.div`
  margin-top: 0.5rem;
`;

const Items = styled.a`
  display: flex;

  width: 20vw;
  height: 4vh;
  background: rgba(220, 220, 220, 0.3);
  border-radius: 10px;
  margin: 0.5rem;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding-left: 2px;
  padding-right: 2px;

  text-decoration: none;
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.3);
  transition: 500ms;

  p {
    color: white;
    font-family: 'Ubuntu', sans-serif;
  }

  &:hover {
    height: 5vh;
  }

  @media(max-width: 720px){
    width: 50vw;
    height: 5vh;

    &:hover {
      height: 7vh;
    }
  }

  @media(max-width: 768px){
    width: 50vw;
    height: 5vh;

    &:hover {
      height: 7vh;
    }
  }  
`;

export {
  Container,
  AllItems,
  Items
}