import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GrameGrid from './components/GrameGrid';

const App = () => (
  <Grid
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
  >
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside">Aside</GridItem>
    </Show>
    <GridItem area="main">
      <GrameGrid />
    </GridItem>
  </Grid>
);

export default App;

//goto: 14 Getting optimize images
