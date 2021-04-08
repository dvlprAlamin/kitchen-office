import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from '../components/FoodItem';
import { fetchFoodsByCategory, fetchFoods } from '../redux/actions/foodAction';


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
const Home = () => {
    const { filterBtn } = useStyle();
    const dispatch = useDispatch()
    const getFoods = useSelector((state) => state.foodsByCategory);
    const { foodsByCategory, loading, error } = getFoods;
    console.log(getFoods);
    // const [selectedFood, setSelectedFood] = useState(foods.filter(food => food.category === 'Lunch'))

    const [category, setCategory] = useState('Lunch');
    // useEffect(() => {
    //     dispatch(fetchFoods());
    // }, [dispatch])
    useEffect(() => {
        dispatch(fetchFoodsByCategory(category));
    }, [dispatch, category])


    // const filterFoods = category => {
    //     setSelectedFood(foods.filter(food => food.category === category))
    // }
    return (
        <Container>
            {
                loading ?
                    <h2>Loading...</h2> : error ?
                        <h2>{error}</h2> :
                        <>
                            <Grid container style={{ margin: '25px 0' }} justify="center">
                                <Grid item>
                                    <Button onClick={() => setCategory('Breakfast')} variant="text"><span className={filterBtn} >Breakfast</span> </Button>
                                    <Button onClick={() => setCategory('Lunch')} variant="text"><span className={filterBtn} >Lunch</span> </Button>
                                    <Button onClick={() => setCategory('Dinner')} variant="text"><span className={filterBtn} >Dinner</span> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} justify="center">
                                {foodsByCategory.map(food =>
                                    <Grid
                                        item lg={4} md={4} sm={6} xs={12} key={food.id}>
                                        <FoodItem food={food} />
                                    </Grid>
                                )}
                            </Grid>
                        </>}
        </Container>
    );
};

export default Home;