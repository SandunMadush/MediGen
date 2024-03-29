import './Layout.scss';

import * as React from 'react';

import { Avatar, Grid } from '@mui/material';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import HealingIcon from "@mui/icons-material/Healing";
import HotelIcon from "@mui/icons-material/Hotel";
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import logo from '../assets/kdu.png';
import { blue, grey, pink, purple, yellow } from '@mui/material/colors';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    let location = useLocation();
    let navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const pages = [
        {
            id: "dashboard",
            text: "Dashboard",
            icon: <DashboardIcon sx={{ color: blue[600] }}/>,
            path: "/user/",
        },
        {
            id: "ward",
            text: "Ward",
            icon: <HotelIcon sx={{ color: blue[500] }}/>,
            path: "/user/ward",
        },
        {
            id: "clinic",
            text: "Clinic",
            icon: <LocalHospitalIcon sx={{ color: blue[400] }}/>,
            path: "/user/clinic",
        },
        {
            id: "theatre",
            text: "Theatre",
            icon: <HotelIcon sx={{ color: blue[300] }}/>,
            path: "/user/theatre",
        },
        {
            id: "endoscopy",
            text: "Endoscopy",
            icon: <HealingIcon sx={{ color: blue[300] }}/>,
            path: "/user/endoscopy",
        },
        {
            id: "logout",
            text: "Logout",
            icon: <LogoutIcon sx={{ color: grey[700] }}/>,
            path: "/user/logout",
        },
    ];


    const handleItemClick = (event) => {
        switch (event.currentTarget.id) {
            case "dashboard":
                navigate("/user");
                break;
            case "ward":
                navigate("/user/ward");
                break;
            case "clinic":
                navigate("/user/clinic");
                break;
            case "theatre":
                navigate("/user/theatre");
                break;
            case "endoscopy":
                navigate("/user/endoscopy");
                break;
            case "logout":
                Logout();
                break;
            default:
                navigate("/dashboard");
                break;
        }
    };


    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {location.pathname === "/user/" ? "DASHBOARD" : location.pathname.split("/")[2]?.toUpperCase()}
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
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="logo" src={logo} />
                        </Grid>
                        <Grid item>
                            <Typography variant="p" noWrap component="div">
                                <b>MEDIGEN</b>
                            </Typography>
                        </Grid>
                    </Grid>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                </Toolbar>

                <Divider />
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
                                component={Link}
                                selected={path === location.pathname}
                            >
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}