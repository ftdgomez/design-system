import {useState} from 'react'
import './design-system/index.scss'

import { Avatar, Button, Container, Grid, Title, Text, Div, Img } from './design-system/core'

function App() {
  const [status, setStatus] = useState(false)

  return (
    <>
      <Container>
          <Div flex alignItems="center">
            <Title transform="uppercase" size="lg" as="h1">Esto Es Un Título</Title>
          </Div>
          <Grid cols={3}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi voluptate laborum sit non perferendis dolorem itaque reprehenderit dolore praesentium! Repudiandae.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi voluptate laborum sit non perferendis dolorem itaque reprehenderit dolore praesentium! Repudiandae.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi voluptate laborum sit non perferendis dolorem itaque reprehenderit dolore praesentium! Repudiandae.
            </Text>
          </Grid>
      </Container>
    </>
  );
}

export default App;
