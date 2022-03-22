import { 
  Container,
  AllItems,
  Item
 } from './styles';
import { OpenGit } from '../OpenGit'

function DevProjects(){
  return(
    <Container>
      <h2>Projetos Desenvolvidos</h2>
      <span>Hello World!</span>

      <AllItems>
        <Item marginTop={3}>
          <img src="https://github.com/IsaelSousa.png" alt="itemimg" />
          <OpenGit />
        </Item>
        <Item marginTop={0}>
          <img src="https://github.com/IsaelSousa.png" alt="itemimg" />
          <OpenGit />      
        </Item>
        <Item marginTop={3}>
          <img src="https://github.com/IsaelSousa.png" alt="itemimg" />   
          <OpenGit />       
        </Item>
      </AllItems>

      <AllItems>
      <Item marginTop={3}>
          <img src="https://github.com/IsaelSousa.png" alt="itemimg" />
          <OpenGit />
        </Item>
        <Item marginTop={0}>
          <img src="https://github.com/IsaelSousa.png" alt="itemimg" />   
          <OpenGit />    
        </Item>
        <Item marginTop={3}>
          <img src="https://github.com/IsaelSousa.png" alt="itemimg" />
          <OpenGit />          
        </Item>
      </AllItems>

    </Container>
  );
}

export { DevProjects }