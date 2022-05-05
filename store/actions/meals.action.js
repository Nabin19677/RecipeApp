export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

//ACTIONS
export const toggelFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

export const setFilters = (filtersSetting) => {
  return {
    type: SET_FILTERS,
    filters: filtersSetting,
  };
};
