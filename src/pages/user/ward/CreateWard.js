import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

export default function CreateWardForm(props) {

  const [date, setDate] = React.useState(dayjs(new Date()));
  const [patientName, setPatientName] = React.useState(props.patient_name);
  const [bhtNumber, setBhtNumber] = React.useState(props.bht_no);
  const [age, setAge] = React.useState(props.age);
  const [gender, setGender] = React.useState(props.gender);
  const [conSurgeon, setConSurgeon] = React.useState(props.con_surgeon);


  const handleChange = (id, value) => {
    switch (id) {
      case 'date':
        setDate(value);
        break;
      case 'patient_name':
        setPatientName(value.target.value);
        break;
      case 'bht_number':
        setBhtNumber(value.target.value);
        break;
      case 'age':
        setAge(value.target.value);
        break;
      case 'gender':
        setGender(value.target.value);
        break;
      case 'con_surgeon':
        setConSurgeon(value.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    if(patientName == '') return;
    if(age == '') return;
    if(gender == '') return;
    if(bhtNumber == '') return;
    if(conSurgeon == '') return;
    e.preventDefault();
    createWard(e);
  };

  const createWard = async (e) => {
    e.preventDefault();
    const ward = { date, patient_name: patientName, bht_no: bhtNumber, age, gender, con_surgeon: conSurgeon };
    const res = await fetch('http://localhost:5000/wards', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(ward),
    });
    const data = await res.json();
    if (data) {
      alert('Ward created successfully');
    }
  }


  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              id="date"
              name="date"
              label="Date"
              autoComplete="given-name"
              variant="outlined"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={(event) => handleChange('date', event)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {patientName==''}
              id="patient_name"
              name="patient_name"
              label="Patient Name"
              fullWidth
              value={patientName}
              onChange={(event) => handleChange('patient_name', event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {age==''}
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              value={age}
              onChange={(event) => handleChange('age', event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {gender==''}
              id="gender"
              name="gender"
              label="Gender"
              fullWidth
              value={gender}
              onChange={(event) => handleChange('gender', event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {bhtNumber==''}
              id="bht_number"
              name="bht_number"
              label="BHT Number"
              fullWidth
              value={bhtNumber}
              onChange={(event) => handleChange('bht_number', event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {conSurgeon==''}
              id="con_surgeon"
              name="con_surgeon"
              label="Conducted Surgeon"
              fullWidth
              value={conSurgeon}
              onChange={(event) => handleChange('con_surgeon', event)}
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} >
            <Button variant="contained" onClick={(event) => handleSubmit(event)}>Create</Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}