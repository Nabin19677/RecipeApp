import { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import HeaderButtonComponent from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummydata";
import BodyText from "./../components/BodyText";

const { View, Text, StyleSheet } = require("react-native");

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favorites);

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                props.navigation.openDrawer();
              }}
            />
          </HeaderButtons>
        );
      },
    });
  }, [props.navigation]);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.fallback}>
        <BodyText>No favorites added.</BodyText>
      </View>
    );
  }

  return <MealList data={favoriteMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
