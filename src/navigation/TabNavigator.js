import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";
import { MainStack, BookedStack } from "./stacks";
import { options } from "./options";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const tabScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ color }) => {
      return route.name === "Main" ? (
        <Ionicons name="ios-albums" size={25} color={color} />
      ) : (
        <Ionicons name="ios-star" size={25} color={color} />
      );
    },
  };
};

const tabBarOptions =
  Platform.OS === "android"
    ? {
        activeTintColor: "#fff",
        shifting: true,
        barStyle: { backgroundColor: THEME.MAIN_COLOR },
      }
    : {
        activeTintColor: THEME.MAIN_COLOR,
        barStyle: { backgroundColor: "#FFFFF" },
      };

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={tabScreenOptions}
      barStyle={tabBarOptions.barStyle}
      shifting={tabBarOptions.shifting}
      activeTintColor={tabBarOptions.activeTintColor}
    >
      <Tab.Screen name="Main" component={MainStack} options={options} />
      <Tab.Screen name="Booked" component={BookedStack} options={options} />
    </Tab.Navigator>
  );
};
