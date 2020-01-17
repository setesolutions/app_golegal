import React from 'react';

import { Container, Texto } from './styles';
import ComponentEditor from './Editor';

export default function Contract() {
  return (
    <Container>
      <div>
        <ComponentEditor />
        {/*       <div />
      <Texto>textotexto</Texto> */}
      </div>
      <div>
        <Texto>teste</Texto>
      </div>
    </Container>
  );
}
