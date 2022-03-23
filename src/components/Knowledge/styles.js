import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  div {
    display: flex;
    width: 200px;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.1); 
  }
`;

const Wrap = styled.button`
  background: rgba(0,0,0, 0.4);
  width: 200px;
  height: 40px;
  border: none;

  font-family: 'Ubuntu';
  font-size: 12pt;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    font-size: 14pt;
  }
`;

const Dropdown = styled.span`
  margin: 5px;
`;

export { 
  Container,
  Background,
  AccordionSection,
  Wrap,
  Dropdown
 }