const { View, Text, StyleSheet, Button, FlatList } = require("react-native");
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MealGridItem from "../components/MealGridItem";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummydata";
import BodyText from "./../components/BodyText";

const CategoryMealsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const categoryId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id == categoryId);
  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [selectedCategory, props.navigation]);

  if (meals.length === 0) {
    return (
      <View style={styles.content}>
        <BodyText>No meals found. Please check your filters</BodyText>
      </View>
    );
  }
  return <MealList data={meals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
