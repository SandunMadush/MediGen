import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import logo from "./assets/kdu.png";

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
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
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
  const imgstyle = { width: 80, height: "auto", margin: "8px 0", align: 'center'};
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
            value={username} onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            style={tboxstyle}
            placeholder="Enter password"
            type="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />

          <FormGroup sx={{ pl: 4 }} align="center">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </FormGroup>

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
          <Link href="#">Forgot password</Link>
        </Box>
        <img src={logo} style={imgstyle} alt="logo" />
      </Paper>
    </Grid>
  );
};

export default Login;
