import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
    foodItemLink: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    foodItem: {
        maxWidth: 300,
        textAlign: 'center',
        margin: 'auto',
        padding: 10,
        transition: 'all .3s linear',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    },
    changerBtn: {

    }
}))
const FoodItem = ({ id, img, name, price }) => {
    const { foodItem, foodItemLink } = useStyle();
    return (
        <Paper
            elevation={2}
            className={foodItem}>
            <Link to={`/food/${id}`} className={foodItemLink}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body1">How to dream about your future</Typography>
                <Typography variant="h4">${price}</Typography>
            </Link>
        </Paper>
    );
};

export default FoodItem;