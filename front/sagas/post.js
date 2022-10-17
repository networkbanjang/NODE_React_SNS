import { all, fork, takeLatest, delay, put, throttle } from "redux-saga/effects";
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, LOAD_POSTS_REQUEST, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS } from "../reducers/post"
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

//스크롤링 아직미구현
function loadPostsAPI(data) {
  return axios.get('/api/posts', data);
}
function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOAD_POSTS_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}


//게시글 추가
function addPostAPI(data) {
  return axios.post(`api/post/${data.postId}/comment`, data)
}

function* addPost(action) {
  try {
    //const result = yield call(addPostAPI,action data);
    yield delay(1000);
    const id=123213;
    yield put({
      type: ADD_POST_SUCCESS,
      data:{
        id,
        content:action.data,
      }
      // data: result.data
    });
    yield put({
      type: ADD_POST_TO_ME,
      data:id,
      // data: result.data
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      data: error.reponse.data,
    })
  }
}

//댓글 추가
function addCommentAPI(data) {
  return axios.post('.api/post', data)
}

function* addComment(action) {
  try {
    //const result = yield call(addCommentAPI,action data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data:action.data,
      // data: result.data
    });
  } catch (error) {
    console.err(error)
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: error.reponse.data,
    })
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

//게시글 삭제
function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

//지켜보고있다.
function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPosts),

  ])
}