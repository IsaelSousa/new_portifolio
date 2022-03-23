import { Contact } from '../../components/Contact/index.jsx';
import { DevProjects } from '../../components/DevProjects/index.jsx';
import { Knowledge } from '../../components/Knowledge/index.jsx';
import { Container, ItemsContainer } from './styles.js';


function HomePage(){
    return (
        <Container>
                <h1>Isael Santos de Sousa</h1>
                <p>Software <p>Developer</p></p>

            <ItemsContainer>
                <Knowledge />
                <DevProjects />
                <Contact />
            </ItemsContainer>

            <footer>
                <span>Powered by @isaelsantos0</span>
            </footer>
        </Container>
    ); 
}

export { HomePage };