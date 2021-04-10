import { Container, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';

const Orders = () => {
    const [orderData, setOrderData] = useState({})
    const { loggedInUser } = useAuth();
    useEffect(() => {
        axios.get(`http://localhost:4000/orders?email=${loggedInUser.email}`)
            .then(response => {
                setOrderData(response.data);
            })
    }, [loggedInUser.email])
    console.log(orderData);
    return (
        <Container>
            {/* <Typography variant="h3">Hello, {name} your have {quantity} orders</Typography> */}
        </Container>
    );
};

export default Orders;