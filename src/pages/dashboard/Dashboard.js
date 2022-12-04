import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Dashboard() {

const cardWard = (
  <React.Fragment>
    <CardContent style={{backgroundColor: "#ed4b82"}}>
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
    <CardContent style={{backgroundColor: "#834bff"}}>
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
    <CardContent style={{backgroundColor: "#ffee33"}}> 
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <h2>THEATRE</h2>
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  </React.Fragment>
);

const cardEndoscopy = (
  <React.Fragment>
    <CardContent style={{backgroundColor: "#6fbf73"}}>
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
  );

  
}
