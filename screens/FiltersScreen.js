import { useCallback, useEffect, useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonComponent from "../components/HeaderButton";
import TitleText from "./../components/TitleText";
import BodyText from "./../components/BodyText";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals.action";

const { View, Text, StyleSheet, Switch } = require("react-native");

const SwitchComponent = (props) => {
  return (
    <View style={styles.switchContainer}>
      <BodyText>{props.title}</BodyText>
      <Switch
        thumbColor={Colors.primaryColor}
        trackColor={{
          true: Colors.accentColor,
        }}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };
    console.log(appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

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
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
            <Item title="Save" iconName="ios-save" onPress={saveFilters}></Item>
          </HeaderButtons>
        );
      },
    });
  }, [
    props.navigation,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    dispatch,
  ]);
  return (
    <View style={styles.screen}>
      <TitleText>Available Filters</TitleText>
      <SwitchComponent
        title="Is Gluten Free"
        value={isGlutenFree}
        onValueChange={(value) => setIsGlutenFree(value)}
      />
      <SwitchComponent
        title="Is Vegan"
        value={isVegan}
        onValueChange={(value) => setIsVegan(value)}
      />
      <SwitchComponent
        title="Is Vegetarian"
        value={isVegetarian}
        onValueChange={(value) => setIsVegetarian(value)}
      />
      <SwitchComponent
        title="Is Lactose Free"
        value={isLactoseFree}
        onValueChange={(value) => setIsLactoseFree(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FiltersScreen;
