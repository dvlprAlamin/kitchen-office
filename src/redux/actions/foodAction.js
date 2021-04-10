import axios from 'axios'
import * as types from '../constant'
export const fetchFoods = () => async dispatch => {
    try {
        dispatch({ type: types.GET_FOODS_REQUEST })
        const { data } = await axios.get('https://fathomless-thicket-96415.herokuapp.com/foods')
        dispatch({
            type: types.GET_FOODS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.GET_FOODS_FAIL,
            payload: error.message
        })
    }
}

export const fetchFoodsByCategory = category => async dispatch => {
    try {
        dispatch({ type: types.GET_FOODS_BY_CATEGORY_REQUEST })
        console.log(category);
        const { data } = await axios.get(`https://fathomless-thicket-96415.herokuapp.com/foods/${category}`)
        console.log(data);
        dispatch({
            type: types.GET_FOODS_BY_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.GET_FOODS_BY_CATEGORY_FAIL,
            payload: error.message
        })
    }
}
export const fetchFoodDetails = id => async dispatch => {
    try {
        dispatch({ type: types.GET_FOOD_DETAILS_REQUEST })
        const { data } = await axios.get(`https://fathomless-thicket-96415.herokuapp.com/food/${id}`)
        dispatch({
            type: types.GET_FOOD_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.GET_FOOD_DETAILS_FAIL,
            payload: error.message
        })
    }
}