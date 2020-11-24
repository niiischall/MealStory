import * as actionTypes from './actionTypes';

export const setFavorite = (inputDishId) => {
    return {
        type: actionTypes.SET_FAVORITES,
        dishId: inputDishId
    }
}

export const setFilters = (inputFilters) => {
    return {
        type: actionTypes.SET_FILTERS,
        filters: inputFilters
    }
}