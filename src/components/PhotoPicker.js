import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet, Image, Button } from "react-native";
import * as Permissions from "expo-permissions";

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== "granted") {
    Alert.alert("Error, you must give permission to use this feature");
    return false;
  }
  return true;
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);
  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();
    if (!hasPermissions) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });
    console.log(image);
    setImage(image.uri);
    onPick(image.uri);
  };
  return (
    <View style={styles.wrapper}>
      <Button title="Make a photo" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});
