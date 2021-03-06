import styled from 'styled-components';

const ContainerGit = styled.a`
  display: flex;

  width: 125px;
  height: 30px;
  background: black;

  align-items: center;
  justify-content: space-around;

  border-radius: 5px;
  text-decoration: none;

  cursor: pointer;
  transition: 500ms;

  span {
    font-family: 'Ubuntu';
    font-size: 14pt;
    transition: 500ms;

    &:hover {
      font-size: 16pt;
    }
  }

  &:hover {
    width: 135px;
  }
`;

export { ContainerGit };