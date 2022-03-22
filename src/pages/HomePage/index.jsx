import { DevProjects } from '../../components/DevProjects/index.jsx';
import { Knowledge } from '../../components/Knowledge/index.jsx';
import { Container, ItemsContainer } from './styles.js';


function HomePage(){
    return (
        <Container>
            <nav>
                <h1>Isael Santos de Sousa</h1>
            </nav>

            <ItemsContainer>
                <DevProjects />
                <Knowledge />
            </ItemsContainer>
        </Container>
    ); 
}

export { HomePage };