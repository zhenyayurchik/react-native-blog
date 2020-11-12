import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigator } from "./TabNavigator";
import { CreateStack, AboutStack } from "./stacks";
import { THEME } from "../theme";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeTintColor: THEME.MAIN_COLOR }}
    >
      <Drawer.Screen
        name="Main screen"
        component={TabNavigator}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen name="Create new post" component={CreateStack} />
      <Drawer.Screen name="About us" component={AboutStack} />
    </Drawer.Navigator>
  );
};
