/* eslint-disable react-hooks/exhaustive-deps */
import DashboardIcon from "@mui/icons-material/Dashboard";
import HealingIcon from "@mui/icons-material/Healing";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
// import logo from "./images/MediGen (1).png";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'surgeon', headerName: 'Con Surgeon', type: 'string', width: 200}
];

const rows = [
  { id: 1,  surgeon: 'Dr. A Fernando' },
  { id: 2,  surgeon: 'Dr. KDW Wijenayake' },
  { id: 3,  surgeon: 'Dr. A Fernando' },
  { id: 4,  surgeon: 'Dr. KDW Wijenayake' },
  { id: 5,  surgeon: 'Dr. A Fernando' },
  { id: 6,  surgeon: 'Dr. A Fernando' },
  { id: 7,  surgeon: 'Dr. A Fernando' },
  { id: 8,  surgeon: 'Dr. KDW Wijenayake' },
  { id: 9,  surgeon: 'Dr. A Fernando' },
  { id: 10, surgeon: 'Dr. KDW Wijenayake' }
];

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

  const axiosJWT = axios.create();
  const drawerWidth = 200;


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
      id: "clinic",
      text: "Clinic",
      icon: <LocalHospitalIcon />,
      path: "/dashboard/clinic",
    },
    {
      id: "theatre",
      text: "Theatre",
      icon: <HotelIcon />,
      path: "/dashboard/theatre",
    },
    {
      id: "endoscopy",
      text: "Endoscopy",
      icon: <HealingIcon />,
      path: "/dashboard/endoscopy",
    },
    {
      id: "logout",
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
      case "clinic":
        navigate("/dashboard/clinic");
        break;
      case "theatre":
        navigate("/dashboard/theatre");
        break;
      case "endoscopy":
        navigate("/dashboard/endoscopy");
        break;
      case "logout":
        navigate("/dashboard/logout");
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
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <div>
            <AppBar
              position="fixed"
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
              }}
            >
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  Welcome to MediGen - Patient Data Management System
                </Typography>
              </Toolbar>

            </AppBar>
          </div>
          <div>
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

              <List>
                {pages.map((item, index) => {
                  const { id, text, icon, path } = item;
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
          </div>
    <div>
     <h3> Surgeon Details </h3>
     <div style={{ height: 500, width: '210%', display: "flex",  }}>
     <DataGrid
         rows={rows}
         columns={columns}
         pageSize={50}
         rowsPerPageOptions={[5]}
        checkboxSelection />
      </div>
     </div>
     
          <Box
            component="main"
            sx={{ flexGrow: 2, bgcolor: "background.default", p: 3 }}
          >
            <Outlet />
          </Box>
        </Box>
      </div>
    </div>

  );
  
  
};


    




export default Dashboard;
