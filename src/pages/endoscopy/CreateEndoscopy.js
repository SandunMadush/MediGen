import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

export default function CreateEndoscopyForm() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              required
              id="date"
              name="date"
              label="Date"

              autoComplete="given-name"
              variant="outlined"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
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
              id="procedure"
              name="procedure"
              label="Procedure"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone_number"
              name="phone_number"
              label="Phone Number"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="consultant"
              name="consultant"
              label="Consultant"
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