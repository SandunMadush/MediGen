/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
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


// import logo from "./images/MediGen (1).png";

const Navbar = () => {
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
       text: 'Dashboard',
       icon: <MailIcon />,
    path: '/'      
    },
    {
      text: 'Ward',
      icon: <MailIcon/>,
       path: '/ward' 
    },
    {
      text: 'Clinic',
      icon: <MailIcon/>,
      path: '/clinic' 
    },
    {
      text: 'Endoscopy',
      icon: <MailIcon/>,
      path: '/endoscopy' 
    },
     {
      text: 'Logout',
      icon: <MailIcon/>,
      path: '/logout' 
     }
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

            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
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
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        
        <List>
        {pages.map((item, index) => {
          const { text, icon, onClick } = item;
          
          return (
            <ListItem button key={text} onClick={onClick}>

              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />       
            </ListItem>
          );
        })}
      </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
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

export default Navbar;
