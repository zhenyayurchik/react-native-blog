import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CreateScreen = ({}) => {
  return (
    <View>
      <Text style={styles.center}>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
