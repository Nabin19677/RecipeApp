import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

//store management
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals.reducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

import MainDrawerNavigator from "./navigation/MealsNavigator";
import { Provider } from "react-redux";

export default (props) => {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <MainDrawerNavigator />
      </Provider>
    );
  }
};
