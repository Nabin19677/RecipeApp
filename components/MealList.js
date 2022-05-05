import { StyleSheet, View, FlatList } from "react-native";
import MealGridItem from "./MealGridItem";

const MealList = (props) => {
  const renderMealsGrid = (itemData) => {
    return (
      <MealGridItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={props.data} renderItem={renderMealsGrid} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default MealList;
