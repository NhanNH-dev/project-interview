import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";

const BASE_URL = " https://jsonplaceholder.typicode.com";

// get post by user
export function* fetchPostByUser() {
  try {
    // yield put({ type: "SHOW_LOADING" });
    const response = yield call(axios.get, `${BASE_URL}/users/1/posts`);
    const { data } = response;

    // call comments for posts
    let postWithComment = [...data];
    if (data && data.length > 0) {
      const comments = yield all(
        data.map((item) =>
          call(axios.get, `${BASE_URL}/post/${item.id}/comments`)
        )
      );
      postWithComment = data.map((post, index) => {
        return {
          ...post,
          comments: comments[index].data,
        };
      });
    }

    yield put({ type: "FETCH_POST_SUCCESS", posts: postWithComment });
  } catch (error) {
    console.log("Fetch List Post Failed", error.message);
  }
}
function* watchFetchPosts() {
  yield takeEvery("FETCH_POST", fetchPostByUser);
}

//Create new post
export function* createPost(action) {
  const { content } = action;
  const body = JSON.stringify(content);
  try {
    yield call(axios.post, `${BASE_URL}/posts`, { body });
    yield put({ type: "FETCH_TODOS" });
    yield put({ type: "SHOW_MESSAGE_SUCCESS", message: "success" });
  } catch (error) {
    yield put({ type: "SHOW_MESSAGE_FAILED", error });
    console.log("createTodo error:", error.message);
  }
}
function* watchCreateNewPost() {
  yield takeEvery("CREATE_NEW_POST", createPost);
}

//delete post
export function* deleteAPost({ id }) {
  try {
    yield call(axios.delete, `${BASE_URL}/posts/${id}`);
    yield put({ type: "FETCH_TODOS" });
    yield put({ type: "SHOW_MESSAGE_SUCCESS" });
  } catch (error) {
    yield put({ type: "SHOW_MESSAGE_FAILED" });
    console.log("deleteTodo Error:", error.message);
  }
}
function* watchDeletePost() {
  yield takeEvery("DELETE_POST", deleteAPost);
}

//get post detail
export function* getPost_detail({ id }) {
  try {
    const res = yield call(axios.get, `${BASE_URL}/users/${id}/posts`);
    const { data } = res;
    yield put({ type: "GET_POST_DETAIL_SUCCESS", data });
  } catch (error) {
    yield put({ type: "NOTIFICATION_FAILED" });
    console.log("deleteTodo Error:", error.message);
  }
}
function* watchGetPostDetail() {
  yield takeEvery("GET_POST_DETAIL", getPost_detail);
}

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchCreateNewPost(),
    watchDeletePost(),
    watchGetPostDetail(),
  ]);
}
