import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import MealDetailScreen from "./../screens/MealDetailScreen";
import FiltersScreen from "./../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const MainDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const MealsStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const FiltersStack = createStackNavigator();

const MealsStackNavigator = (props) => {
  return (
    <MealsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },

        headerTintColor: "white",
      }}
    >
      <MealsStack.Screen
        name="Categories"
        options={{
          title: "Categories",
          headerTitleAlign: "center",
        }}
        component={CategoriesScreen}
      />
      <MealsStack.Screen
        name="CategoryMeals"
        options={{
          title: "Meals",
          headerTitleAlign: "center",
        }}
        component={CategoryMealsScreen}
      />
      <MealsStack.Screen name="MealDetail" component={MealDetailScreen} />
    </MealsStack.Navigator>
  );
};

const FavoriteStackNavigator = (props) => {
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },

        headerTintColor: "white",
      }}
    >
      <FavoriteStack.Screen
        name="Favorite"
        options={{
          headerShown: true,
          title: "Your Favorites",
          headerTitleAlign: "center",
        }}
        component={FavoritesScreen}
      />
      <FavoriteStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavoriteStack.Navigator>
  );
};

const FiltersStackNavigator = (props) => (
  <FiltersStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },

      headerTintColor: "white",
    }}
  >
    <FiltersStack.Screen
      name="filters"
      options={{
        title: "Filters",
      }}
      component={FiltersScreen}
    />
  </FiltersStack.Navigator>
);

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarLabel: "Meals",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={22} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favoritetab"
        component={FavoriteStackNavigator}
        options={{
          tabBarLabel: "Favorite!",
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={22} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainDrawerNavigator = (props) => (
  <NavigationContainer>
    <MainDrawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainDrawer.Screen
        name="MealsDrawer"
        component={TabNavigator}
        options={{
          title: "Meals",
        }}
      ></MainDrawer.Screen>
      <MainDrawer.Screen
        name="FiltersDrawer"
        component={FiltersStackNavigator}
        options={{
          title: "Filters",
        }}
      ></MainDrawer.Screen>
    </MainDrawer.Navigator>
  </NavigationContainer>
);

export default MainDrawerNavigator;
