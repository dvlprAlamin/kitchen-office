import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';
import { resetCart } from '../redux/actions/cartAction';

const CheckOut = () => {
    const { loggedInUser } = useAuth();
    const history = useHistory()
    const [address, setAddress] = useState({});
    const blurHandler = e => {
        const deliveryDetails = { ...address }
        deliveryDetails[e.target.name] = e.target.value;
        setAddress(deliveryDetails)
    }

    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const orderPlaceHandler = async e => {
        e.preventDefault();
        const orderData = {
            email: loggedInUser.email,
            userInfo: { ...address },
            orderedItems: cartItems
        }
        try {
            const response = await axios.post('https://fathomless-thicket-96415.herokuapp.com/order', orderData)
            if (response) {
                history.push('/orders')
                dispatch(resetCart());
            }
        } catch (error) {

        }
    }
    return (
        <Container style={{ padding: '60px 20px' }}>
            <Grid container spacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Paper style={{ padding: 20 }} elevation={2}>
                        <Typography variant="h4">Edit delivery details</Typography>
                        <Typography variant="h6" style={{ lineHeight: 4 }}>Delivery to door</Typography>
                        <form onSubmit={orderPlaceHandler}>
                            <TextField
                                fullWidth
                                onBlur={blurHandler}
                                required
                                variant="outlined"
                                label="Road No"
                                name="road"
                                placeholder="Enter road no"
                                style={{ marginBottom: 10 }}
                            />
                            <TextField
                                fullWidth
                                onBlur={blurHandler}
                                required
                                variant="outlined"
                                label="Flat, suit or floor"
                                name="flat"
                                placeholder="Enter Flat, suit or floor"
                                style={{ marginBottom: 10 }}
                            />
                            <TextField
                                fullWidth
                                onBlur={blurHandler}
                                required
                                variant="outlined"
                                label="Name"
                                name="name"
                                placeholder="Enter name"
                                style={{ marginBottom: 10 }}
                            />
                            <TextField
                                fullWidth
                                onBlur={blurHandler}
                                variant="outlined"
                                label="Add delivery instruction (Optional)"
                                name="instruction"
                                placeholder="Enter delivery instruction"
                                style={{ marginBottom: 10 }}
                            />
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained">Place Order</Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid style={{ marginLeft: 'auto' }} item lg={4} md={4} sm={12} xs={12}>
                    {/* <CheckOutDetails /> */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default CheckOut;