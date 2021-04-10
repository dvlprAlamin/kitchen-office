import { Container, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useAuth } from '../context/authContext';
import { fetchOrders } from '../redux/actions/ordersAction';

const Orders = () => {
    // const [orderData, setOrderData] = useState({})
    const { loggedInUser } = useAuth();
    const dispatch = useDispatch()
    const getOrders = useSelector((state) => state.orders);

    const { currentUserOrders, loading, error } = getOrders;
    console.log(currentUserOrders);
    // const [category, setCategory] = useState('Breakfast');
    useEffect(() => {
        dispatch(fetchOrders(loggedInUser.email));
    }, [dispatch, loggedInUser.email])
    // console.log(orderData);
    return (
        <Container style={{ minHeight: '95vh' }}>
            {currentUserOrders.length === 0 &&
                <div style={{ display: 'flex', height: "90vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" >You didn't place any order yet.</Typography>
                </div>}
            {loading ? <Loader /> : error ? <h1>{error}</h1> :
                currentUserOrders?.[currentUserOrders.length - 1]?.orderedItems?.map(item =>
                    <Container key={item.id}>
                        <Paper elevation={2} style={{ padding: 10, marginTop: 25 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <img style={{ maxWidth: 300 }} src={item.img} alt="" />
                                </Grid>
                                <Grid item xs={6} style={{ margin: 'auto' }}>
                                    <Typography variant="h4">{item.name} {item.quantity} item</Typography>
                                    <Typography variant="h3" color="secondary">${item.price * item.quantity}</Typography>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Container>)}
        </Container>
    );
};

export default Orders;