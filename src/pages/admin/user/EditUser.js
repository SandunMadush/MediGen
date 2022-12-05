import * as React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditUserForm(props) {
  let { id } = useParams();

  useEffect(() => {
    setUser();

  }, []);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    editUser(e);
  };

  const editUser = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const res = await fetch(`http://localhost:5000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data) {
      alert("User updated successfully");
    }
  };


  const setUser = async () => {
    const res = await fetch(`http://localhost:5000/user/${id}`);
    const data = await res.json();
    setUsername(data[0].username);
    setPassword(data[0].password);
  }
    
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
                Update
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </React.Fragment>
    );
  };

