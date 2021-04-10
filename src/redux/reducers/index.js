import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { foodReducer, foodByCategoryReducer, foodDetailsReducer } from './foodReducer';
import { ordersReducer } from './ordersReducer';

export default combineReducers({
    foods: foodReducer,
    foodDetails: foodDetailsReducer,
    foodsByCategory: foodByCategoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
});