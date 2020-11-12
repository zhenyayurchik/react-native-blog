import React from "react";

import { DATA } from "../data";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", post);
  };

  return (
    <PostList data={DATA.filter((el) => el.booked)} onOpen={openPostHandler} />
  );
};
