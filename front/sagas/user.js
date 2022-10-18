import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, 
  LOG_OUT_FAILURE, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from "../reducers/user";
import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../reducers/user';
import axios from 'axios'

function logInAPI() {
  return axios.post('api/login')
}

function* login(action) {
  try {
    //const result = yield call(logInAPI);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.reponse.data,
    })
  }
}

function logOutAPI() {
  return axios.post('api/logout')
}

function* logOut() {
  try {
    //const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.reponse.data,
    })
  }
}

function signUpAPI(data) {
  return axios.post('http://localhost:3065/user',data);  //data는 객체
}

function* signUP(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error('에러',err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI() {
  return axios.post('.api/follow')
}

function* follow(action) {
  try {
    //const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data:action.data,
    });
  } catch (error) {
    yield put({
      type: FOLLOW_FAILURE,
      error: error.reponse.data,
    })
  }
}

function unfollowAPI() {
  return axios.post('.api/unfollow')
}

function* unfollow(action) {
  try {
    //const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data:action.data,
    });
  } catch (error) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: error.reponse.data,
    })
  }
}

//지켜보고있다
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUP);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchunFollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchunFollow),
  ])
}