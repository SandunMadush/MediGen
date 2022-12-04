import * as React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";


export default function CreateEndoscopyForm(props) {

  const [date, setDate] = React.useState(dayjs(new Date()));
  const [bhtNumber, setBhtNumber] = React.useState(props.bht_no);
  const [patientName, setPatientName] = React.useState(props.patient_name);
  const [age, setAge] = React.useState(props.age);
  const [procedure, setProcedure] = React.useState(props.endo_procedure);
  const [phoneNumber, setPhoneNumber] = React.useState(props.phone_no);
  const [consultant, setConsultant] = React.useState(props.consultant);

  const handleChange = (id, value) => {
    switch (id) {
      case "date":
        setDate(value);
        break;
      case "patient_name":
        setPatientName(value.target.value);
        break;
      case "bht_number":
        setBhtNumber(value.target.value);
        break;
      case "age":
        setAge(value.target.value);
        break;
      case "procedure":
        setProcedure(value.target.value);
        break;
      case "phone_number":
        setPhoneNumber(value.target.value);
        break;
      case "consultant":
        setConsultant(value.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    if(bhtNumber == '') return;
    e.preventDefault();
    createEndoscopy(e);

  };

  const createEndoscopy = async (e) => {
    e.preventDefault();
    const endoscopy = { date, patient_name: patientName, bht_no: bhtNumber, age, endo_procedure: procedure, phone_no: phoneNumber, consultant };
    const res = await fetch('http://localhost:5000/endoscopy', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(endoscopy),
    });
    const data = await res.json();
    if (data) {
      alert('Endoscopy created successfully');
    }
  }

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
              value={date}
              onChange={(event) => handleChange('date', event)}
              renderInput={(params) => <TextField {...params} fullWidth />}
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
              id="age"
              name="age"
              label="Age"
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
              id="procedure"
              name="procedure"
              label="Procedure"
              fullWidth
              value={procedure}
              onChange={(event) => handleChange('procedure', event)}
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
              value={phoneNumber}
              onChange={(event) => handleChange('phone_number', event)}
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
              value={consultant}
              onChange={(event) => handleChange('consultant', event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
          <Button variant="contained" onClick={(event) => handleSubmit(event)}>Create</Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
