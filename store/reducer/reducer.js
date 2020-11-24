import * as actionTypes  from '../action/actionTypes';
import { Meals, Dishes } from "../../data/dummyData";

const initialState = {
    meals: [...Meals],
    dishes: [...Dishes],
    filteredDishes: [...Dishes],
    favoriteDishes: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_FAVORITES:
            const dishId = action.dishId;
            const selectedDishIndex = state.favoriteDishes.findIndex(dish => dish.id === dishId);
            if(selectedDishIndex !== -1){
                let favoriteDishes = [...state.favoriteDishes];
                favoriteDishes.splice(selectedDishIndex, 1);
                return {
                    ...state,
                    favoriteDishes: favoriteDishes
                }
            }else {
                const selectedDish = state.filteredDishes.find(dish => dish.id === dishId);
                return {
                    ...state,
                    favoriteDishes: state.favoriteDishes.concat(selectedDish)
                }
            }
        case actionTypes.SET_FILTERS:
            const inputFilters = action.filters;
            let filteredDishes = state.dishes.filter((dish) => {
                if(inputFilters.isGlutenFree && !dish.isGlutenFree){
                    return false;
                }
                if(inputFilters.isLactoseFree && !dish.isLactoseFree){
                    return false;
                }
                if(inputFilters.isVegan && !dish.isVegan){
                    return false;
                }
                if(inputFilters.isVegetarian && !dish.isVegetarian){
                    return false;
                }
                return true;
            });

            return {
               ...state,
               filteredDishes: filteredDishes
            }
        default:
            return state;
    }
}

export default reducer;