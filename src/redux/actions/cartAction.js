import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";


export const addToCart = (id, quantity) => async (dispatch, getState) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(meal =>
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    id: meal.meals[0].idMeal,
                    name: meal.meals[0].strMeal,
                    imgUrl: meal.meals[0].strMealThumb,
                    price: 50,
                    quantity
                },
            })
        )

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
