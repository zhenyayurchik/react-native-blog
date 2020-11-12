import React from "react";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Platform } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const options = ({ route, navigation }) => {
  const getTitle = (name) => {
    if (name === "Post") {
      return `Пост от ${new Date(route?.params?.date).toLocaleDateString()}`;
    }
    return name;
  };

  const getHeaderRightButton = (name) => {
    return name === "My blog" ? (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take Photot"
          iconName="ios-camera"
          onPress={() => navigation.jumpTo("Create new post")}
        />
      </HeaderButtons>
    ) : null;
  };

  const getHeaderLeftButton = (name) => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Toggle Drawer"
          iconName={name === "Post" ? "ios-arrow-back" : "ios-menu"}
          onPress={() =>
            name === "Post" ? navigation.goBack() : navigation.toggleDrawer()
          }
        />
      </HeaderButtons>
    );
  };

  return {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    title: getTitle(route.name),
    headerRight: () => getHeaderRightButton(route.name),
    headerLeft: () => getHeaderLeftButton(route.name),
  };
};
