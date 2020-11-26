import {
  GET_POSTS,
  TOGGLE_BOOK,
  REMOVE_POST,
  ADD_POST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
  // loading: false,
  // error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        // loading: true,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
      };
    case TOGGLE_BOOK:
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post) => post.booked),
      };
    case REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter(
          (post) => post.id !== action.payload
        ),
      };
    case ADD_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
      };
    // case GET_POSTS_SUCCESS:
    //   return {
    //     ...state,
    //     allPosts: action.payload,
    //     bookedPosts: action.payload.filter((post) => post.booked),
    //     loading: false,
    //     error: null,
    //   };
    // case GET_POSTS_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error,
    //   };
    default:
      return state;
  }
};
