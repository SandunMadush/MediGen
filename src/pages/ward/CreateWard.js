import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

export default function CreateWardForm() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="h7" gutterBottom>
          Please enter the details-
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              required
              id="date"
              name="date"
              label="Date"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}