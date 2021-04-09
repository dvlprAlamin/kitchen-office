import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CheckOutDetails from '../components/CheckOutDetails';
// import { GetFood } from '../context/foodContext';

const CheckOut = ({ handleClickOpen, handleClose, open }) => {
    const [address, setAddress] = useState({});
    const blurHandler = e => {
        const deliveryDetails = { ...address }
        deliveryDetails[e.target.name] = e.target.value;
        setAddress(deliveryDetails)
    }

    // console.log(address);
    const deliveryAddressHandler = () => {

    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Paper style={{ padding: 20 }} elevation={2}>
                        <Typography variant="h4">Edit delivery details</Typography>
                        <Typography variant="h6" style={{ lineHeight: 4 }}>Delivery to door</Typography>
                        <form action="">
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
                                label="Business Name"
                                name="name"
                                placeholder="Enter business name"
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
                                onClick={handleClickOpen}
                                color="secondary"
                                variant="contained">Save and continue</Button>
                        </form>
                        <CheckOutDetails
                            open={open}
                            handleClose={handleClose}
                        />
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