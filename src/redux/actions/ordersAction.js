import axios from 'axios'
import * as types from '../constant'

export const fetchOrders = email => async dispatch => {
    try {
        dispatch({ type: types.GET_ORDERS_REQUEST })
        const { data } = await axios.get(`https://fathomless-thicket-96415.herokuapp.com/orders?email=${email}`)
        console.log(data);
        dispatch({
            type: types.GET_ORDERS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.GET_ORDERS_FAIL,
            payload: error.message
        })
    }
}