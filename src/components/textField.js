import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

function TextField() {
  return (
    <MuiTextField
      id="sign-in-email"
      label="Email"
      style={{
        margin: 8,
      }}
      placeholder="Email"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
}

export default TextField;
