import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from '@material-ui/icons';
import { useAuth } from '../context/authContext';
import { Avatar, Button, Container } from '@material-ui/core';
import logo from '../img/logo.png'
import { useSelector } from 'react-redux';
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#663399'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    navItemM: {
        display: 'flex',
        alignItems: 'center',
        padding: '.8rem 0',
        paddingLeft: '10%',
        opacity: '.8',
        transition: '.3s linear',
        borderRight: '4px solid transparent',
        '&:hover': {
            opacity: '1',
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        },

    },
    active: {
        borderColor: theme.palette.primary.main,
    },
    navIcon: {
        color: theme.palette.primary.main,
        marginRight: 10,
    },
    navLogoText: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        margin: '1rem .3rem'
    },
    logoImg: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbar: {
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
        display: 'flex',
        justifyContent: 'space-between',
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'none',
        },
        background: '#663399',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navItem: {
        borderBottom: '2px solid transparent',
        color: '#fff',
        transition: '.3s',
        '&:hover': {
            color: 'red',
            borderBottom: '2px solid red'
        }
    },
    linkItem: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    cart: {
        color: '#fff',
        transition: '.3s',
        '&:hover': {
            color: 'red',
        }
    }
}));

const Navigation = ({ window, handleClickOpen }) => {
    const { root, appBar, menuButton, drawerPaper, navbar, navItem, linkItem, cart, link, navItemM, } = useStyles()

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalQuantity = cartItems.reduce((qty, item) => qty + item.quantity, 0)

    const { loggedInUser, logOut } = useAuth();
    const logOutHandler = async e => {
        try {
            await logOut();
            console.log('log out successfully');
        } catch {

        }
    }

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ textAlign: 'center' }}>
            <Typography variant="h6">
                Kitchen Office
            </Typography>
            <Divider />
            <Link to='/' className={link}>
                <ListItem button className={navItemM} >
                    <ListItemText primary={'Home'} />
                </ListItem>
            </Link>
            <Divider />
            <Link to='/login' className={link}>
                <ListItem button className={navItemM}>
                    <ListItemText primary={'Login'} />
                </ListItem>
            </Link>
            <Divider />
            <Link to='/signup' className={link}>
                <ListItem button className={navItemM}>
                    <ListItemText primary={'Sign up'} />
                </ListItem>
            </Link>
            <Divider />
            <ListItem onClick={handleClickOpen} button className={navItemM}>
                <ShoppingCart className='' />
                <span style={{ color: '#ff0000', fontSize: 26 }}>
                    {totalQuantity}
                </span>
            </ListItem>
            <Divider />
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className={root}>
            <AppBar
                className={appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={drawer}>
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <Container className={navbar}>
                <img src={logo} style={{ maxWidth: 250 }} alt="Logo" />
                <div>
                    <Link className={linkItem} to='/'><Button>
                        <span className={navItem}>Home</span>
                    </Button>
                    </Link>
                    <Link className={linkItem} to='/checkout'><Button>
                        <span className={navItem}>Checkout</span>
                    </Button>
                    </Link>
                    <Link className={linkItem} to='/orders'><Button>
                        <span className={navItem}>Orders</span>
                    </Button>
                    </Link>
                    <Button onClick={handleClickOpen}>
                        <ShoppingCart className={cart} />
                        <span style={{ color: '#ff0000', fontSize: 26 }}>
                            {totalQuantity}
                        </span>
                    </Button>

                    {loggedInUser ?
                        <Avatar
                            style={{ display: 'inline-flex', top: 10 }}
                            src={loggedInUser.photoURL} /> :
                        <Link className={linkItem} to='/login'><Button><span className={navItem}>Login</span></Button></Link>}

                    {loggedInUser ?
                        <Button onClick={logOutHandler}><span className={navItem}>Logout</span></Button> :
                        <Link className={linkItem} to='/signup'><Button><span className={navItem}>Sign up</span></Button></Link>}
                </div>
            </Container>
        </div>
    );
}


export default Navigation;