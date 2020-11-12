import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { options } from "./options";
import { CreateScreen } from "../screens/CreateScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My blog" component={MainScreen} options={options} />
      <Stack.Screen name="Post" component={PostScreen} options={options} />
    </Stack.Navigator>
  );
};

export const BookedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Booked" component={BookedScreen} options={options} />
      <Stack.Screen name="Post" component={PostScreen} options={options} />
    </Stack.Navigator>
  );
};

export const CreateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create new post"
        component={CreateScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

export const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} options={options} />
    </Stack.Navigator>
  );
};
