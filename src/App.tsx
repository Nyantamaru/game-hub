import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GrameGrid from './components/GrameGrid';
import GenreList from './components/GenreList';

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
      <GridItem area="aside">
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <GrameGrid />
    </GridItem>
  </Grid>
);

export default App;

//goto: 17 Fetching the genres
