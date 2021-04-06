import { Button, Container } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { GetFood } from '../context/foodContext';

const Navbar = () => {
    const { cart } = GetFood();
    return (
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src="" alt="Logo" />
            <div>
                <Button><ShoppingCart />
                    <span style={{ color: '#ff0000', fontSize: 26 }}>
                        {cart.quantity || 0}
                    </span>
                </Button>
                <Button>Login</Button>
                <Button>Sign up</Button>
            </div>
        </Container>
    );
};

export default Navbar;