import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useParams } from 'react-router';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodDetails } from '../redux/actions/foodAction';
import { addToCart } from '../redux/actions/cartAction'
import Loader from './Loader';
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
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const getFoodDetails = useSelector((state) => state.foodDetails);
    useEffect(() => {
        dispatch(fetchFoodDetails(id));
    }, [dispatch, id])
    console.log(getFoodDetails);
    const { food, loading, error } = getFoodDetails;
    const addToCartHandler = () => {
        dispatch(addToCart(id, quantity));
    }
    return (
        <Container style={{ minHeight: '100vh' }}>
            {loading ? <Loader /> :
                error ? <h1>{error}</h1> :
                    <Grid container spacing={3}>
                        <Grid className={foodInfo} item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="h3">{food?.[0].name}</Typography>
                            <Typography variant="body1">{food?.[0].description}</Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Typography variant="h3">${(food?.[0].price * quantity).toFixed(2)}</Typography>
                                <div className={counterSection}>
                                    <Button onClick={() => setQuantity(pre => pre > 1 ? pre - 1 : 1)} ><RemoveIcon /></Button>
                                    <span style={{ fontSize: 20 }}>{quantity}</span>
                                    <Button onClick={() => setQuantity(pre => pre + 1)}> <AddIcon color="secondary" /></Button>
                                </div>
                            </div>
                            <Link
                                to='/checkout'
                                style={{ textDecoration: 'none' }}>
                                <Button
                                    size="large"
                                    onClick={addToCartHandler}
                                    color="secondary" variant="contained">
                                    <ShoppingCartIcon /> Add
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <img style={{ width: '100%' }} src={food?.[0].img} alt="" />
                        </Grid>
                    </Grid>}
        </Container >
    );
};

export default FoodItemDetails;