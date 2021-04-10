import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import FoodItem from '../components/FoodItem';
import Loader from '../components/Loader';
import WhyChooseUs from '../components/WhyChooseUs';
import { fetchFoodsByCategory } from '../redux/actions/foodAction';


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

    const [category, setCategory] = useState('Breakfast');
    useEffect(() => {
        dispatch(fetchFoodsByCategory(category));
    }, [dispatch, category])
    return (
        <>
            <Banner />
            <Container style={{ minHeight: '100vh', margin: '30px auto' }}>
                <Grid container style={{ margin: '25px 0' }} justify="center">
                    <Grid item>
                        <Button onClick={() => setCategory('Breakfast')} variant="text"><span className={filterBtn}>Breakfast</span> </Button>
                        <Button onClick={() => setCategory('Lunch')} variant="text"><span className={filterBtn} >Lunch</span> </Button>
                        <Button onClick={() => setCategory('Dinner')} variant="text"><span className={filterBtn} >Dinner</span> </Button>
                    </Grid>
                </Grid>
                {loading ?
                    <Loader /> : error ?
                        <h2>{error}</h2> :
                        <Grid container spacing={3}>
                            {foodsByCategory.map(food =>
                                <Grid
                                    item lg={4} md={4} sm={6} xs={12} key={food._id}>
                                    <FoodItem food={food} />
                                </Grid>
                            )}
                        </Grid>}
            </Container>
            <WhyChooseUs />
        </>
    );
};

export default Home;