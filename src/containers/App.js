import React from 'react';
import {
  Grid, Typography, Container,
} from '@material-ui/core';
import './App.css';
import SignIn from './SignIn';
import NavBar from '../components/navigation';

function App() {
  return (
    <Grid
      container
      direction="column"
    >
      <Grid container item>
        <Typography>
          Header for app!
        </Typography>
      </Grid>

      <Container>
        <SignIn />
      </Container>

      <Grid container item>
        <NavBar />
      </Grid>
    </Grid>
  );
}

export default App;
