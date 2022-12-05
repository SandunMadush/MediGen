import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { DataTable } from "../../../shared/Datatable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const columnsBHT = [
    { field: "date", headerName: "Date", type: "string", flex: 1 },
    {
      field: "patient_name",
      headerName: "Patient Name",
      type: "string",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "string",
      flex: 1,
    },
    {
      field: "bht_no",
      headerName: "BHT Number",
      type: "string",
      flex: 1,
    },
  ];

  const columnsClinic = [
    { field: "date", headerName: "Date", type: "string", flex: 1 },
    {
      field: "patient_name",
      headerName: "Patient Name",
      type: "string",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "string",
      flex: 1,
    },
    {
      field: "clinic_no",
      headerName: "Clinic Number",
      type: "string",
      flex: 1,
    },

    {
      field: "visit_no",
      headerName: "Visit Number",
      type: "string",
      flex: 1,
    }
  ];

  const [rowsWard, setRowsWard] = React.useState([]);
  const [rowsClinic, setRowsClinic] = React.useState([]);
  const [rowsTheatre, setRowsTheatre] = React.useState([]);
  const [rowsEndoscopy, setRowsEndoscopy] = React.useState([]);

  const [value, setValue] = React.useState(0);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const getWards = async () => {
    const response = await fetch("http://localhost:5000/wards");
    const data = await response.json();
    setRowsWard(formatRows(data));
  };

  const getClinics = async () => {
    const response = await fetch("http://localhost:5000/clinics");
    const data = await response.json();
    setRowsClinic(formatRowsClinic(data));
  };

  const getTheatres = async () => {
    const response = await fetch("http://localhost:5000/theatre");
    const data = await response.json();
    setRowsTheatre(formatRows(data));
  };

  const getEndoscopy = async () => {
    const response = await fetch("http://localhost:5000/endoscopy");
    const data = await response.json();
    setRowsEndoscopy(formatRows(data));
  };

  const formatRows = (data) => {
    return data.map((dashboard) => {
      return {
        id: dashboard.bht_no,
        date: dashboard.date,
        patient_name: dashboard.patient_name,
        age: dashboard.age,
        bht_no: dashboard.bht_no,
      
      };
    });
  };

  const formatRowsClinic = (data) => {
    return data.map((dashboard) => {
      return {
        id: dashboard.clinic_no,
        date: dashboard.date,
        patient_name: dashboard.patient_name,
        age: dashboard.age,
        clinic_no: dashboard.clinic_no,
        visit_no: dashboard.visit_no
      };
    });
  };

  React.useEffect(() => {
    getWards();
    getClinics();
    getTheatres();
    getEndoscopy();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardWard = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: "#ed4b82" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>WARD</h2>
        </Typography>
        <Typography variant="body2">
        Number of Patients: {rowsWard.length}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const cardClinic = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: "#834bff" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>CLINIC</h2>
        </Typography>
        <Typography variant="body2">
         Number of Patients: {rowsClinic.length} 
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const cardTheatre = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: "#ffee33" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>THEATRE</h2>
        </Typography>
        <Typography variant="body2">
         Number of Patients: {rowsTheatre.length}

        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const cardEndoscopy = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: "#6fbf73" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>ENDOSCOPY</h2>
        </Typography>
        <Typography variant="body2">
        Number of Patients: {rowsEndoscopy.length}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div>
      <Box sx={{ Width: 100 }}>
        <Grid container spacing={3}>
          <Grid item xs={10} sm={3}>
            <Card variant="outlined">{cardWard}</Card>
          </Grid>
          <Grid item xs={10} sm={3}>
            <Card variant="outlined">{cardClinic}</Card>
          </Grid>
          <Grid item xs={10} sm={3}>
            <Card variant="outlined">{cardTheatre}</Card>
          </Grid>
          <Grid item xs={10} sm={3}>
            <Card variant="outlined">{cardEndoscopy}</Card>
          </Grid>
        </Grid>
      </Box>
      <br/>
      <Box >
        <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab style={{ fontWeight: 'bold' }} label="WARD" {...a11yProps(0)} />
            <Tab style={{ fontWeight: 'bold' }}  label="CLINIC" {...a11yProps(1)} />
            <Tab style={{ fontWeight: 'bold' }}  label="THEATRE" {...a11yProps(2)} />
            <Tab style={{ fontWeight: 'bold' }}  label="ENDOSCOPY" {...a11yProps(3)} />
          
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {rowsWard.length > 0 && (
              <DataTable rows={rowsWard} columns={columnsBHT} title="Ward Patient Summary " />
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {rowsClinic.length > 0 && (
              <DataTable rows={rowsClinic} columns={columnsClinic} title="Clinic Patient Summary " />
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {rowsTheatre.length > 0 && (
              <DataTable rows={rowsTheatre} columns={columnsBHT} title="Theatre Patient Summary" />
            )}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {rowsEndoscopy.length > 0 && (
              <DataTable rows={rowsEndoscopy} columns={columnsBHT} title="Endoscopy Patient Summary" />
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
