import axios from 'axios'
import * as types from '../constant'

export const fetchOrders = category => async dispatch => {
    try {
        dispatch({ type: types.GET_FOODS_BY_CATEGORY_REQUEST })
        console.log(category);
        const { data } = await axios.get(`http://localhost:4000/foods/${category}`)
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