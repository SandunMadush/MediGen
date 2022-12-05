import * as React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";


export default function CreateUserForm(props) {
  const [username, setUsername] = React.useState(props.username);
  const [password, setPassword] = React.useState(props.password);

  const handleChange = (id, value) => {
    switch (id) {
      case "username":
        setUsername(value.target.value);
        break;
      case "password":
        setPassword(value.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(e);
  };

  const createUser = async (e) => {
    e.preventDefault();
    const user = {
      
        username: username, 
        password: password, 
    
    };
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data) {
      alert("User created successfully");
    }
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="username"
              name="username"
              label="Username"
              fullWidth
              value={username ? username : ""}
              onChange={(event) => handleChange("username", event)}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              value={password ? password : ""}
              onChange={(event) => handleChange("password", event)}
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
