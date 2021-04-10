import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET } from "../constant";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://fathomless-thicket-96415.herokuapp.com/food/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            id: data[0]._id,
            name: data[0].name,
            img: data[0].img,
            price: data[0].price,
            quantity,
        },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export const resetCart = () => (dispatch) => {
    dispatch({
        type: CART_RESET,
        payload: []
    });

    localStorage.clear();
};
