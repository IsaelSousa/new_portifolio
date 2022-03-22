import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;

  h2 {
    color: white;
    font-family: 'Ubuntu';
    font-weight: 500;
  }
  span {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    font-size: 12pt;
  }

`;

const AllItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Item = styled.div`
  width: 165px;
  height: 190px;
  background: rgba(220, 220, 220, 0.3);
  border-radius: 20px;
  margin: 15px;
  margin-top: ${props => `${props.marginTop}rem`};
  border: 2px solid rgba(220, 220, 220, 0.0);
  transition: 500ms;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 1px 3px 1px rgba(0,0,0, 0.3);

  img {
    width: 125px;
    height: 130px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`;

export { 
  Container,
  AllItems,
  Item,
 }