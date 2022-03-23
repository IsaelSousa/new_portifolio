import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;

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
  align-items: center;
  margin-top: 1rem;

  @media(max-width: 720px){
    flex-direction: column;
    margin-top: 0px;
  }
`;

const Item = styled.div`
  @import "css-aspect-ratio/css-aspect-ratio";  
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

  &:hover {
    border: 2px solid rgb(48, 240, 128);
    width: 180px;
    height: 210px;
  }

  @media(max-width: 720px){
    display: flex;
    margin-top: 0px;
  }

  @media(max-width: 768px){
    display: flex;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export { 
  Container,
  AllItems,
  Item,
 }