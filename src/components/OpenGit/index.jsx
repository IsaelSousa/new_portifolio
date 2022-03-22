import { FiGithub } from 'react-icons/fi';
import { ContainerGit } from './styles';

function OpenGit(){
  return(
    <ContainerGit>
      <FiGithub color='white' />
      <span>Github</span>
    </ContainerGit>
  );
}

export { OpenGit }