import * as React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditTheatreForm(props) {
  let { id } = useParams();

  useEffect(() => {
    setTheatre();
  }, []);

  const [date, setDate] = React.useState(dayjs(new Date()));
  const [patientName, setPatientName] = React.useState(props.patient_name);
  const [bhtNumber, setBhtNumber] = React.useState(props.bht_no);
  const [wardNumber, setWardNumber] = React.useState(props.ward_no);
  const [age, setAge] = React.useState(props.age);
  const [gender, setGender] = React.useState(props.gender);
  const [surgery, setSurgery] = React.useState(props.surgery);
  const [conSurgeon, setConSurgeon] = React.useState(props.con_surgeon);
  const [conAnesthetic, setConAnesthetic] = React.useState(
    props.con_anesthetic
  );
  const [theatreNumber, setTheatreNumber] = React.useState(props.theatre_no);
  const [isPcr, setIsPcr] = React.useState(false);
  const [isRAT, setIsRat] = React.useState(false);
  const [isFasting, setIsFasting] = React.useState(false);
  const [isEcho, setIsEcho] = React.useState(false);
  const [isEcg, setIsEcg] = React.useState(false);
  const [isCt, setIsCt] = React.useState(false);
  const [clinicNumber, setClinicNumber] = React.useState(props.clinic_number);

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
          case "ward_number":
            setWardNumber(value.target.value);
            break;
          case "age":
            setAge(value.target.value);
            break;
          case "gender":
            setGender(value.target.value);
            break;
          case "surgery":
            setSurgery(value.target.value);
            break;
          case "con_surgeon":
            setConSurgeon(value.target.value);
            break;
          case "con_anesthetic":
            setConAnesthetic(value.target.value);
            break;
          case "theatre_number":
            setTheatreNumber(value.target.value);
            break;
          case "isPcr":
            setIsPcr(value.target.checked);
            break;
          case "isRat":
            setIsRat(value.target.checked);
            break;
          case "isFasting":
            setIsFasting(value.target.checked);
            break;
          case "isEcho":
            setIsEcho(value.target.checked);
            break;
          case "isEcg":
            setIsEcg(value.target.checked);
            break;
          case "isCt":
            setIsCt(value.target.checked);
            break;
          case "clinic_number":
            setClinicNumber(value.target.value);
            break;
          default:
            break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    EditTheatre(e);
  };

  const setTheatre = async () => {
    const res = await fetch(`http://localhost:5000/theatre/${id}`);
    const data = await res.json();
    setBhtNumber(data[0].bht_no);
    setPatientName(data[0].patient_name);
    setBhtNumber(data[0].bht_no);
    setWardNumber(data[0].ward_no);
    setAge(data[0].age);
    setGender(data[0].gender);
    setSurgery(data[0].surgery);
    setConSurgeon(data[0].con_surgeon);
    setConAnesthetic(data[0].con_anesthetic);
    setTheatreNumber(data[0].theatre_no);
    setIsPcr(data[0].is_pcr);
    setIsRat(data[0].is_rat);
    setIsEcg(data[0].is_ecg);
    setIsFasting(data[0].is_fasting);
    setIsEcho(data[0].is_echo);
    setIsEcg(data[0].is_ecg);
    setIsCt(data[0].is_ct);
    setClinicNumber(data[0].clinic_number);
    
  };

  const EditTheatre = async (e) => {
    e.preventDefault();
    const theatre = {
      date,
      patient_name: patientName,
      bht_no: bhtNumber,
      ward_no: wardNumber,
      age,
      surgery,
      gender,
      con_surgeon: conSurgeon,
      con_anesthetic: conAnesthetic,
      theatre_no: theatreNumber,
      is_pcr: isPcr,
      is_rat: isRAT,
      is_fasting: isFasting,
      is_echo: isEcho,
      is_ecg: isEcg,
      is_ct: isCt,
      clinic_number: clinicNumber,
    };
    const res = await fetch(`http://localhost:5000/theatre/${bhtNumber}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(theatre),
    });
    const data = await res.json();
    if (data) {
      alert("Details updated successfully");
    }
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
              value={date}
              onChange={(event) => handleChange("date", event)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
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
              id="bht_number"
              name="bht_number"
              label="BHT Number"
              fullWidth
              value={bhtNumber ? bhtNumber : ""}
              onChange={(event) => handleChange("bht_number", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="ward_number"
              name="ward_number"
              label="Ward Number"
              fullWidth
              value={wardNumber ? wardNumber : ""}
              onChange={(event) => handleChange("ward_number", event)}
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
              value={age ? age : ""}
              onChange={(event) => handleChange("age", event)}
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
              value={gender ? gender : ""}
              onChange={(event) => handleChange("gender", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="surgery"
              name="surgery"
              label="Surgery"
              fullWidth
              value={surgery ? surgery : ""}
              onChange={(event) => handleChange("surgery", event)}
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
              value={conSurgeon ? conSurgeon : ""}
              onChange={(event) => handleChange("con_surgeon", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="con_anaesthetic"
              name="con_anaesthetic"
              label="Conducted Anaesthetic"
              fullWidth
              value={conAnesthetic ? conAnesthetic : ""}
              onChange={(event) => handleChange("con_anesthetic", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="theatre_number"
              name="theatre_number"
              label="Theatre Number"
              fullWidth
              value={theatreNumber ? theatreNumber : ""}
              onChange={(event) => handleChange("theatre_number", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
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
            <FormControlLabel
              control={
                <Checkbox
            
                  onChange={(e) => handleChange("isPcr", e)}
                />
              }
              label="PCR"
            />
            <FormControlLabel
              control={
                <Checkbox
        
                  onChange={(e) => handleChange("isRat", e)}
                />
              }
              label="RAT"
            />
            <FormControlLabel
              control={
                <Checkbox
         
                  onChange={(e) => handleChange("isFasting", e)}
                />
              }
              label="Fasting"
            />
            <FormControlLabel
              control={
                <Checkbox
      
                  onChange={(e) => handleChange("isEcho", e)}
                />
              }
              label="Echo"
            />
            <FormControlLabel
              control={
                <Checkbox
        
                  onChange={(e) => handleChange("isEcg", e)}
                />
              }
              label="ECG"
            />
            <FormControlLabel
              control={
                <Checkbox
                
                  onChange={(e) => handleChange("isCt", e)}
                />
              }
              label="CT"
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
