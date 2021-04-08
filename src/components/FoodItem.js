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
const FoodItem = ({ food }) => {
    const { foodItem, foodItemLink } = useStyle();
    const { _id, name, price, img, slug } = food;
    return (
        <Paper
            elevation={2}
            className={foodItem}>
            <Link to={`/food/${_id}`} className={foodItemLink}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <Typography variant="h6">{name}</Typography>
                <Typography variant="caption">{slug}</Typography>
                <Typography variant="h5">${price}</Typography>
            </Link>
        </Paper>
    );
};

export default FoodItem;