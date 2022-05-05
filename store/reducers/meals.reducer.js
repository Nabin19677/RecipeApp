import { MEALS } from "../../data/dummydata";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals.action";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorites: [],
};

export default mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      let selectedMealIndex = state.favorites.findIndex(
        (fav) => fav.id === action.mealId
      );
      if (selectedMealIndex >= 0) {
        let updatedFavorites = [...state.favorites];
        updatedFavorites.splice(selectedMealIndex, 1);
        return { ...state, favorites: updatedFavorites };
      } else {
        let selectedMeal = state.meals.filter(
          (meal) => meal.id === action.mealId
        );
        return { ...state, favorites: state.favorites.concat(selectedMeal) };
      }
    case SET_FILTERS:
      let appliedFilters = action.filters;
      console.log(appliedFilters);
      let updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };

    default:
      return state;
  }
};
