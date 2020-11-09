import React from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';

function SignIn() {
  return (
    <form>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
          >
            Sign In
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="sign-in-email"
            label="Email"
            fullWidth
            placeholder="Email"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="sign-in-password"
            label="Password"
            fullWidth
            placeholder="Password"
            variant="outlined"
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{ textAlign: 'center' }}
        >
          <Button variant="contained">
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>

  );
}

export default SignIn;
