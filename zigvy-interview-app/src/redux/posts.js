import * as type from "./types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  search_title: [],
  searched: false,
  show: false,
  message: '',
  post_detail: []
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_POST:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case type.FETCH_POST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case type.SHOW_MESSAGE_SUCCESS:
      return {
        ...state,
        show: true,
      };
    case type.SHOW_MESSAGE_FAILED:
      return {
        ...state,
        show: true,
      };
    case type.GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        post_detail: action.data,
      };

    case type.SEARCH_TITLE:
      const value = action.payload;
      const searchedTitle = state.posts.filter((post) =>
        post.title.includes(value)
      );
      return { ...state, search_title: searchedTitle, searched: true };


    default:
      return state;
  }
}
