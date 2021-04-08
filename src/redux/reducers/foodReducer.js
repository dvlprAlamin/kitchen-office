import * as types from "../constant";

export const foodReducer = (state = { foods: [] }, action) => {
    switch (action.type) {
        case types.GET_FOODS_REQUEST:
            return {
                loading: true,
                foods: [],
            };
        case types.GET_FOODS_SUCCESS:
            return {
                foods: action.payload,
                loading: false,
            };
        case types.GET_FOODS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export const foodByCategoryReducer = (state = { foodsByCategory: [] }, action) => {
    switch (action.type) {
        case types.GET_FOODS_BY_CATEGORY_REQUEST:
            return {
                loading: true,
                foodsByCategory: [],
            };
        case types.GET_FOODS_BY_CATEGORY_SUCCESS:
            return {
                foodsByCategory: action.payload,
                loading: false,
            };
        case types.GET_FOODS_BY_CATEGORY_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const foodDetailsReducer = (state = { foodDetails: {} }, action) => {
    switch (action.type) {
        case types.GET_FOOD_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case types.GET_FOOD_DETAILS_SUCCESS:
            return {
                loading: false,
                food: action.payload,
            };
        case types.GET_FOOD_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case types.GET_FOOD_DETAILS_RESET:
            return {
                food: {},
            };
        default:
            return state;
    }
};
