import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { GetFood } from '../context/foodContext';
const useStyle = makeStyles((theme) => ({
    filterBtn: {
        borderBottom: '2px solid transparent',
        transition: '.3s',
        '&:hover': {
            color: 'red',
            borderBottom: '2px solid red'
        }
    }
}))
const FilterFood = () => {
    // const { foods, setSelectedFood } = GetFood();
    const { filterBtn } = useStyle();
    // const [selectedFood, setSelectedFood] = useState(foods.filter(food => food.type === 'breakfast'))
    const filterFoods = type => {
        // setSelectedFood(foods.filter(food => food.type === type))
    }
    return (
        <Grid container style={{ margin: '25px 0' }} justify="center">
            <Grid item>
                <Button onClick={() => filterFoods('Breakfast')} variant="text"><span className={filterBtn} >Breakfast</span> </Button>
                <Button onClick={() => filterFoods('Lunch')} variant="text"><span className={filterBtn} >Lunch</span> </Button>
                <Button onClick={() => filterFoods('Dinner')} variant="text"><span className={filterBtn} >Dinner</span> </Button>
            </Grid>
        </Grid>
    );
};

export default FilterFood;