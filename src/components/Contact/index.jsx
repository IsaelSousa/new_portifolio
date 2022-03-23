import { AllItems, Container, Items } from './styles';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';

function Contact(){
  return(
    <Container>
      <h2>Contato</h2>

      <AllItems>
        <Items href='https://www.instagram.com/isaelsantos0/?hl=pt-br' target='_blank'>
          <AiFillInstagram  color='white' size={35} />
          <p>Instagram</p>
          <p></p>
        </Items>

        <Items href='https://www.linkedin.com/in/isael-sousa-a31367173/' target='_blank'>
          <AiFillLinkedin color='white' size={35} />
          <p>Linkedin</p>
          <p></p>
        </Items>

        <Items href='mailto:isaelsantos636@gmail.com' target='_blank'>
          <CgMail color='white' size={35} />
          <p>Gmail</p>
          <p></p>
        </Items>
      </AllItems>
    </Container>
  );
}

export { Contact }