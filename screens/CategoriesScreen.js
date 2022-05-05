import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummydata";
import Colors from "../constants/Colors";
import CategoryGridItem from "../components/CategoryGridItem";
import { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonComponent from "../components/HeaderButton";

const CategoriesScreen = (props) => {
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

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      // keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

CategoriesScreen.navigationOptions = {
  headerTitle: "Meals Categories",
};

export default CategoriesScreen;
