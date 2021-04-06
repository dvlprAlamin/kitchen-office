import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { GetFood } from '../context/foodContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useParams } from 'react-router';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({
    root: {

    },
    foodInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    counterSection: {
        border: '1px solid #ddd',
        borderRadius: 30,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
    }
})
const FoodItemDetails = () => {
    const { id } = useParams();
    const { foodInfo, counterSection } = useStyle()
    const { foods, setCart } = GetFood()
    const { img, name, price, description } = foods.find(food => food.id === +id)
    const [count, setCount] = useState(1);
    const totalPrice = (price * count).toFixed(2)
    const updateCart = () => {
        const cartData = {
            id,
            quantity: count,
            total: totalPrice
        };
        setCart(cartData);
        console.log(cartData);
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid className={foodInfo} item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="body1">{description}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Typography variant="h3">${totalPrice}</Typography>
                        <div className={counterSection}>
                            <Button onClick={() => setCount(count > 0 ? count - 1 : 0)} ><RemoveIcon /></Button>
                            <span style={{ fontSize: 20 }}>{count}</span>
                            <Button onClick={() => setCount(count + 1)}> <AddIcon color="secondary" /></Button>
                        </div>
                    </div>
                    <Link
                        to='/checkout'
                        style={{ textDecoration: 'none' }}>
                        <Button onClick={updateCart} color="secondary" variant="contained">
                            <ShoppingCartIcon /> Add
                            </Button>
                    </Link>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default FoodItemDetails;