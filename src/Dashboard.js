/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { navbarStyles } from "./navbarstyles";
import { mainNavbarItems } from "./navbarlist";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealingIcon from "@mui/icons-material/Healing";
import LogoutIcon from "@mui/icons-material/Logout";
import routes from "./routes/routes";

// import logo from "./images/MediGen (1).png";

const Dashboard = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //refreshToken();
    getUsers();
  }, []);

  //  const refreshToken = async () => {
  //     try {
  //         const response = await axios.get('http://localhost:5000/token');
  //         setToken(response.data.accessToken);
  //          const decoded = jwt_decode(response.data.accessToken);
  //          setName(decoded.name);
  //          setExpire(decoded.exp);
  //     } catch (error) {
  //         if (error.response) {
  //              navigate("/");
  //         }
  //     }
  //  }

  const axiosJWT = axios.create();
  const drawerWidth = 240;

  const pages = [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      id: "ward",
      text: "Ward",
      icon: <HotelIcon />,
      path: "/dashboard/ward",
    },
    {
      id: "dashboard",
      text: "Clinic",
      icon: <LocalHospitalIcon />,
      path: "/dashboard/clinic",
    },
    {
      id: "dashboard",
      text: "Endoscopy",
      icon: <HealingIcon />,
      path: "/dashboard/endoscopy",
    },
    {
      id: "dashboard",
      text: "Logout",
      icon: <LogoutIcon />,
      path: "/dashboard/logout",
    },
  ];

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const handleItemClick = (event) => {
    switch (event.currentTarget.id) {
      case "dashboard":
        navigate("/dashboard");
        break;
      case "ward":
        navigate("/dashboard/ward");
        break;
      default:
        navigate("/dashboard");
        break;
    }
  };

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome Back: {name}</h1>
      <table className="table is-striped is-fullwidth">
        {/* <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead> */}
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Welcome to MediGen
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />

          <List>
            {pages.map((item, index) => {
              const {id, text, icon, path } = item;
              return (
                <ListItem
                  button
                  key={text}
                  to={path}
                  id={id}
                  onClick={handleItemClick}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </div>

    /* <Drawer
          sx={navbarStyles.drawer}
         variant="permanent"
         anchor="left"
      >
       <Toolbar />
        <Divider />
       <List>
          {mainNavbarItems.map((item, index) => (
           <ListItem
                button
                key={item.id}
                onClick={() => navigate(item.route)}
            >
             <ListItemIcon
               sx={navbarStyles.icons}
             >
                {item.icon}
             </ListItemIcon>
              <ListItemText
               sx={navbarStyles.text}
               primary={item.label}
             />
            </ListItem>
          ))}
        </List>
      </Drawer> */
  );
};

export default Dashboard;
