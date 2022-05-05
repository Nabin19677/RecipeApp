import { useCallback, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonComponent from "./../components/HeaderButton";
import MealGridItem from "./../components/MealGridItem";
import TitleText from "./../components/TitleText";
import BodyText from "./../components/BodyText";
import { useDispatch, useSelector } from "react-redux";
import { toggelFavorite, TOGGLE_FAVORITE } from "../store/actions/meals.action";

const ListItem = (props) => {
  return (
    <View style={styles.listItemContainer}>
      <BodyText style={styles.listItemText}>{props.children}</BodyText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const dispatch = useDispatch();
  const MEALS = useSelector((state) => state.meals.meals);
  const mealId = props.route.params.mealId;
  const isFavorite = useSelector((state) =>
    state.meals.favorites.some((meal) => meal.id == mealId)
  );
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  const toggleFavorite = useCallback(
    () => dispatch(toggelFavorite(mealId)),
    [dispatch, mealId]
  );
  useEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
            <Item
              title="Favourite"
              iconName={isFavorite ? "ios-star" : "ios-star-outline"}
              onPress={toggleFavorite}
            />
          </HeaderButtons>
        );
      },
    });
  }, [selectedMeal, props.navigation, toggleFavorite, isFavorite]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.detail}>
          <MealGridItem
            title={selectedMeal.title}
            imageUrl={selectedMeal.imageUrl}
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
          />
        </View>
      </View>
      <View style={styles.ingredients}>
        <TitleText style={styles.title}>List of Ingredients:</TitleText>
        {selectedMeal.ingredients.map((ingredient, index) => {
          return <ListItem key={index}>{ingredient}</ListItem>;
        })}
      </View>
      <View style={styles.steps}>
        <TitleText style={styles.title}>List of Steps:</TitleText>
        {selectedMeal.steps.map((step, index) => {
          return <ListItem key={index}>{step}</ListItem>;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  detail: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  ingredients: {},
  steps: {},
  title: {
    textAlign: "center",
    marginVertical: 5,
  },
  listItemContainer: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 5,
    marginVertical: 8,
    padding: 10,
  },
  listItemText: {
    textAlign: "center",
  },
});

export default MealDetailScreen;
