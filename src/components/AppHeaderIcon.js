import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { Platform } from "react-native";
import { THEME } from "../theme";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Ionicons}
    color={Platform.OS === "android" ? "#fff" : THEME}
  />
);
