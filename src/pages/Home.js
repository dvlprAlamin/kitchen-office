import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../components/FoodItem';
import { GetFood } from '../context/foodContext';


const useStyle = makeStyles((theme) => ({
    changerBtn: {
        borderBottom: '2px solid transparent',
        transition: '.3s',
        '&:hover': {
            color: 'red',
            borderBottom: '2px solid red'
        }
    }
}))
const Home = () => {
    const { foods } = GetFood();
    const { changerBtn } = useStyle();
    const [selectedFood, setSelectedFood] = useState(foods.filter(food => food.type === 'breakfast'))
    const filterFoods = type => {
        setSelectedFood(foods.filter(food => food.type === type))
    }
    return (
        <Container>
            <Grid container style={{ margin: '25px 0' }} justify="center">
                <Grid item>
                    <Button onClick={() => filterFoods('breakfast')} variant="text"><span className={changerBtn} >Breakfast</span> </Button>
                    <Button onClick={() => filterFoods('lunch')} variant="text"><span className={changerBtn} >Lunch</span> </Button>
                    <Button onClick={() => filterFoods('dinner')} variant="text"><span className={changerBtn} >Dinner</span> </Button>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                {selectedFood.map(food =>
                    <Grid
                        item lg={4} md={4} sm={6} xs={12} key={food.id}>
                        <FoodItem id={food.id} img={food.img} name={food.name} price={food.price} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Home;