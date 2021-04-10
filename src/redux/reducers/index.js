import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { foodReducer, foodByCategoryReducer, foodDetailsReducer } from './foodReducer';

export default combineReducers({
    foods: foodReducer,
    foodDetails: foodDetailsReducer,
    foodsByCategory: foodByCategoryReducer,
    cart: cartReducer
});