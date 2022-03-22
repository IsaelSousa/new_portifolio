import { useState } from 'react';
import { AccordionSection, Background, Container, Wrap, Dropdown } from './styles';
import { Data } from '../../data/Data';


function Knowledge(){
  const [ clicked, setClicked ] = useState(false);

  const toggle = index => {
    if(clicked === index){
      return setClicked(null);
    }
    setClicked(index);
  }
  return(
    <Container>
      <h2>Conhecimento</h2>
      <span>Learning</span>
      <Background>
        {Data.map((items, index)=> (
          <AccordionSection key={index}>
            <Wrap onClick={() => toggle(index)}>
              {items.name}
            </Wrap>
            {clicked === index ? (
              <div>
              {items.learning.map((names, index)=> (
                <Dropdown key={index}>
                  {names}
                </Dropdown>
              ))}</div>
            ) : null}
          </AccordionSection>
        ))}
      </Background>
    </Container>
  );
}

export { Knowledge }