import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { removePost, toggleBook } from "../store/actions/post";

export const PostScreen = ({ navigation, route }) => {
  const postId = route?.params?.id;
  const post = useSelector((state) =>
    state.post.allPosts.find((el) => el.id === postId)
  );
  const booked = useSelector((state) =>
    state.post.bookedPosts.some((el) => el.id === postId)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions(optionsForHeader(booked));
  }, [navigation, booked]);

  const optionsForHeader = (booked) => {
    const iconName = booked ? "ios-star" : "ios-star-outline";
    return {
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Star"
            iconName={iconName}
            onPress={() => dispatch(toggleBook(postId))}
          />
        </HeaderButtons>
      ),
    };
  };

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно уверены, что хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            navigation.goBack();
            dispatch(removePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };
  return post ? (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  ) : null;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
