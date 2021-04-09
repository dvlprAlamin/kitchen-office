import { Button, Container } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ handleClickOpen }) => {
    // const { cart } = GetFood();
    return (
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src="" alt="Logo" />
            <div>
                <Link to='/'><Button>  Home</Button></Link>

                <Button onClick={handleClickOpen}>
                    <ShoppingCart />
                    <span style={{ color: '#ff0000', fontSize: 26 }}>
                        {0}
                    </span>
                </Button>
                <Button>Login</Button>
                <Button>Sign up</Button>
            </div>
        </Container>
    );
};

export default Navbar;