import { Avatar, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/kdu.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      navigate("/user");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg);
      }
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#13aabf" };
  const btnstyle = { margin: "8px 0", borderRadius: 50, width: 220 };
  const tboxstyle = { margin: "11px 0" };
  const imgstyle = {
    width: 150,
    height: 120,
    margin: "8px 0",
    align: "center",
  };
  let navigate = useNavigate();

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={10} style={paperStyle} align="center">
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ width: 56, height: 56 }}>
            <LoginIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <form onSubmit={Auth} align="center">
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            style={tboxstyle}
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          

          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={btnstyle}
            fullWidth
          >
            Login
          </Button>
        </form>

        <Box
          sx={{
            typography: "body1",
            "& > :not(style) + :not(style)": {
              ml: 2,
            },
          }}
        >
        </Box>
        <img  src={logo} style={imgstyle} alt="logo" />
      </Paper>
    </Grid>
  );
};

export default Login;
