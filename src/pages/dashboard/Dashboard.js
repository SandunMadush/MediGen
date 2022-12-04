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
import { DataTable } from "../../shared/Datatable";

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
        <Box sx={{ p: 3 }}>
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
  const columns = [
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

  const [rowsWard, setRowsWard] = React.useState([]);
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

  React.useEffect(() => {
    getWards();
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
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
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
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
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
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
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
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {rowsWard.length > 0 && (
              <DataTable rows={rowsWard} columns={columns} title="1324" />
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {rowsTheatre.length > 0 && (
              <DataTable rows={rowsTheatre} columns={columns} title="1555" />
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {rowsEndoscopy.length > 0 && (
              <DataTable rows={rowsEndoscopy} columns={columns} title="2222" />
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
