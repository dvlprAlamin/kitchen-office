import * as types from '../constant'


export const ordersReducer = (state = { currentUserOrders: [] }, action) => {
    switch (action.type) {
        case types.GET_ORDERS_REQUEST:
            return {
                loading: true,
                currentUserOrders: [],
            };
        case types.GET_ORDERS_SUCCESS:
            return {
                currentUserOrders: action.payload,
                loading: false,
            };
        case types.GET_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};