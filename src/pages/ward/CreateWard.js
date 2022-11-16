import * as React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function CreateWardForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ward Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="Date"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patient_name"
            name="patient_name"
            label="Patient Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bht_number"
            name="bht_number"
            label="BHT Number"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="con_surgeon"
            name="con_surgeon"
            label="Conducted Surgeon"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}