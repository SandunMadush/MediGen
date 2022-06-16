import { Grid, Paper, Avatar, TextField, Typography } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import logo from "../assets/kdu.png";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#13aabf" };
  const btnstyle = { margin: "8px 0", borderRadius: 50, width: 220 };
  const tboxstyle = { margin: "11px 0" };
  const imgstyle = { width: 80, height: "auto", margin: "8px 0" };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh"}}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ width: 56, height: 56 }}>
            <LoginIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          placeholder="Enter username"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={tboxstyle}
          placeholder="Enter password"
          type="password"
        />

        <FormGroup sx={{ pl: 4 }}>
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
