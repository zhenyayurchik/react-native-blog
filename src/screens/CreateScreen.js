import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const createPost = () => {
    const post = {
      id: new Date().toJSON(),
      date: new Date().toJSON(),
      text,
      img,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.goBack();
  };
  const photoPickHandler = (uri) => {
    if (uri) {
      setImg(uri);
    }
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Please, create a new post.</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Please, fill this field"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Create"
            color={THEME.MAIN_COLOR}
            onPress={createPost}
            disabled={!text || !img}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
});
