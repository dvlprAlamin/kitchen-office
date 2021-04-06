import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { GetFood } from '../context/foodContext';

const CheckOutDetails = () => {
    const { address, cart, foods } = GetFood();
    const randomTime = Math.round(Math.random() * 15 + 10)
    const cartFoods = foods.filter(food => (+cart.id) === food.id)
    // console.log(cartFoods);
    return (
        < >
            <Typography variant="h5"> From: Cafe Jhotpot</Typography>
            <Typography variant="h6"> Arriving in {randomTime}-{randomTime + 10} minutes</Typography>
            <Typography variant="body1"> {address.road}</Typography>
            {
                cartFoods.map(food => <Paper>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <img width='100%' src={food.img} alt="" />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1">{food.name}</Typography>
                            <Typography variant="h6" color="secondary">{food.price}</Typography>
                            <Typography variant="caption" color="textSecondary">Delivery free</Typography>
                        </Grid>
                        <Grid item xs={5}>

                        </Grid>
                    </Grid>
                </Paper>)
            }
        </>
    );
};

export default CheckOutDetails;