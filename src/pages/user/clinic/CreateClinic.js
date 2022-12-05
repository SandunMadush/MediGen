import * as React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

export default function CreateClinicForm(props) {

  const [date, setDate] = React.useState(dayjs(new Date()));
  const [patientName, setPatientName] = React.useState(props.patient_name);
  const [clinicNumber, setClinicNumber] = React.useState(props.clinic_no);
  const [age, setAge] = React.useState(props.age);
  const [phoneNumber, setPhoneNumber] = React.useState(props.phone_no);
  const [visitNumber, setVisitNumber] = React.useState(props.visit_no);

  const handleChange = (id, value) => {
    switch (id) {
      case "date":
        setDate(value);
        break;
      case "patient_name":
        setPatientName(value.target.value);
        break;
      case "clinic_number":
        setClinicNumber(value.target.value);
        break;
      case "age":
        setAge(value.target.value);
        break;
      case "phone_number":
        setPhoneNumber(value.target.value);
        break;
      case "visit_number":
        setVisitNumber(value.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    if(patientName == '') return;
    if(age == '') return;
    if(clinicNumber == '') return;
    if(phoneNumber == '') return;
    if(visitNumber == '') return;
    e.preventDefault();
    createClinic(e);
  };

  const createClinic = async (e) => {
    e.preventDefault();
    const Clinic = {
      date,
      patient_name: patientName,
      clinic_no: clinicNumber,
      age,
      phone_no: phoneNumber,
      visit_no: visitNumber,
    };
    const res = await fetch("http://localhost:5000/clinics", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Clinic),
    });
    const data = await res.json();
    if (data) {
      alert("Clinic created successfully");
    }
  };

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
              onChange={(event) => handleChange("date", event)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {patientName ==''}
              id="patient_name"
              name="patient_name"
              label="Patient Name"
              fullWidth
              value={patientName ? patientName : ""}
              onChange={(event) => handleChange("patient_name", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {age ==''}
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              value={age ? age : ""}
              onChange={(event) => handleChange("age", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {clinicNumber ==''}
              id="clinic_number"
              name="clinic_number"
              label="Clinic Number"
              fullWidth
              value={clinicNumber ? clinicNumber : ""}
              onChange={(event) => handleChange("clinic_number", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {phoneNumber ==''}
              id="phone_number"
              name="phone_number"
              label="Phone Number"
              fullWidth
              value={phoneNumber ? phoneNumber : ""}
              onChange={(event) => handleChange("phone_number", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              error = {visitNumber ==''}
              id="visit_number"
              name="visit_number"
              label="Visit Number"
              fullWidth
              value={visitNumber ? visitNumber : ""}
              onChange={(event) => handleChange("visit_number", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={(event) => handleSubmit(event)}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
