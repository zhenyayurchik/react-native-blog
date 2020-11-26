import {
  GET_POSTS,
  TOGGLE_BOOK,
  REMOVE_POST,
  ADD_POST,
  GET_POSTS_FAILURE,
} from "../types";
import { DATA } from "../../data";

export const loadPosts = () => ({
  type: GET_POSTS,
  payload: DATA,
});

export const toggleBook = (id) => ({
  type: TOGGLE_BOOK,
  payload: id,
});
export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

// export const loadPosts = () => {
//   return (dispatch) => {
//     dispatch(getPostsSuccess(DATA));
//     dispatch(getPostsSuccess(DATA));

//     // dispatch(getPostsFailure(err.message));
//   };
// };

// const getPosts = () => ({
//   type: GET_POSTS,
// });

// const getPostsSuccess = (data) => ({
//   type: GET_POSTS_SUCCESS,
//   payload: data,
// });

// const getPostsFailure = (error) => ({
//   type: GET_POSTS_FAILURE,
//   payload: {
//     error,
//   },
// });
