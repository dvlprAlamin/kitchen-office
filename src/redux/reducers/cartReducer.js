import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET } from '../constant';

const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(pd => pd.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(pd => pd.id === existItem.id ? item : pd)
                };
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(pd => pd.id !== action.payload)
            };
        case CART_RESET:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}