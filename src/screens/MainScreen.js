import React from "react";

import { DATA } from "../data";
import { PostList } from "../components/PostList";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", post);
  };

  return <PostList data={DATA} onOpen={openPostHandler} />;
};
