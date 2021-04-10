import { Avatar, Button, Container, makeStyles } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext';
import logo from '../img/logo.png'
const useStyle = makeStyles((theme) => ({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 15,
        left: 0,
        right: 0,
        margin: 'auto'

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
}))
const Navbar = ({ handleClickOpen }) => {
    const { navbar, navItem, linkItem, cart } = useStyle()
    const { loggedInUser, logOut } = useAuth();
    const logOutHandler = async e => {
        try {
            await logOut();
            console.log('log out successfully');
        } catch {

        }
    }

    return (
        <Container className={navbar}>
            <img src={logo} style={{ maxWidth: 250 }} alt="Logo" />
            <div>
                <Link className={linkItem} to='/'><Button>
                    <span className={navItem}>Home</span>
                </Button></Link>

                <Button onClick={handleClickOpen}>
                    <ShoppingCart className={cart} />
                    <span style={{ color: '#ff0000', fontSize: 26 }}>
                        {0}
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
    );
};

export default Navbar;