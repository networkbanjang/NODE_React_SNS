"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 5504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const backurl = () => {
  if (true) {
    return "http://54.180.128.214";
  } else {}
}; //계속 바뀌는거 주의


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backurl);

/***/ }),

/***/ 2135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8176);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__]);
([_user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // (이전상태, 액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return action.payload;

    default:
      {
        const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
          user: _user__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
          post: _post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Co
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ag": () => (/* binding */ LOAD_USER_POSTS_SUCCESS),
/* harmony export */   "Co": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "EG": () => (/* binding */ LOAD_POST_REQUEST),
/* harmony export */   "FM": () => (/* binding */ RETWEET_FAILURE),
/* harmony export */   "Gz": () => (/* binding */ LIKE_POST_SUCCESS),
/* harmony export */   "HU": () => (/* binding */ REMOVE_POST_REQUEST),
/* harmony export */   "LF": () => (/* binding */ LOAD_HASHTAG_POSTS_SUCCESS),
/* harmony export */   "N3": () => (/* binding */ LOAD_USER_POSTS_FAILURE),
/* harmony export */   "Ot": () => (/* binding */ ADD_COMMENT_REQUEST),
/* harmony export */   "Po": () => (/* binding */ REMOVE_IMAGE),
/* harmony export */   "QA": () => (/* binding */ UPLOAD_IMAGES_REQUEST),
/* harmony export */   "T5": () => (/* binding */ LOAD_POSTS_FAILURE),
/* harmony export */   "VT": () => (/* binding */ UNLIKE_POST_REQUEST),
/* harmony export */   "Ws": () => (/* binding */ REMOVE_POST_FAILURE),
/* harmony export */   "XD": () => (/* binding */ UNLIKE_POST_SUCCESS),
/* harmony export */   "YQ": () => (/* binding */ LOAD_POST_SUCCESS),
/* harmony export */   "ZL": () => (/* binding */ RETWEET_SUCCESS),
/* harmony export */   "ZP": () => (/* binding */ LOAD_POSTS_SUCCESS),
/* harmony export */   "_s": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "a0": () => (/* binding */ RETWEET_REQUEST),
/* harmony export */   "aO": () => (/* binding */ LOAD_POSTS_REQUEST),
/* harmony export */   "az": () => (/* binding */ LOAD_HASHTAG_POSTS_REQUEST),
/* harmony export */   "cT": () => (/* binding */ LIKE_POST_FAILURE),
/* harmony export */   "gq": () => (/* binding */ UNLIKE_POST_FAILURE),
/* harmony export */   "hX": () => (/* binding */ UPLOAD_IMAGES_FAILURE),
/* harmony export */   "kv": () => (/* binding */ UPLOAD_IMAGES_SUCCESS),
/* harmony export */   "nv": () => (/* binding */ ADD_COMMENT_SUCCESS),
/* harmony export */   "rK": () => (/* binding */ REMOVE_POST_SUCCESS),
/* harmony export */   "rX": () => (/* binding */ ADD_COMMENT_FAILURE),
/* harmony export */   "rl": () => (/* binding */ LOAD_POST_FAILURE),
/* harmony export */   "tP": () => (/* binding */ ADD_POST_FAILURE),
/* harmony export */   "uk": () => (/* binding */ LOAD_HASHTAG_POSTS_FAILURE),
/* harmony export */   "x5": () => (/* binding */ LOAD_USER_POSTS_REQUEST),
/* harmony export */   "xD": () => (/* binding */ LIKE_POST_REQUEST),
/* harmony export */   "z9": () => (/* binding */ ADD_POST_REQUEST)
/* harmony export */ });
/* unused harmony exports initialState, addCommentRequest */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_produce__WEBPACK_IMPORTED_MODULE_0__]);
_util_produce__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialState = {
  mainPosts: [],
  imagePaths: [],
  //이미지 업로드할때 저장되는 경로
  hasMorePosts: true,
  addPostLoading: false,
  addPostDone: false,
  //업로드성공여부 기본값은 false
  addPostError: false,
  addCommentLoading: false,
  //댓글
  addCommentDone: false,
  addCommentError: false,
  removePostLoading: false,
  //삭제
  removePostDone: false,
  removePostError: false,
  loadPostsLoading: false,
  //게시글 열람
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  //단일게시글 열람
  loadPostDone: false,
  loadPostError: null,
  likePostLoading: false,
  //좋아요
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  //좋아요 취소
  unlikePostDone: false,
  unlikePostError: null,
  uploadImagesLoading: false,
  //이미지 업로드
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  //리트윗
  retweetDone: false,
  retweetError: null,
  singlePost: null
};
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; //단일게시글

const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const REMOVE_IMAGE = "REMOVE_IMAGE";
const addCommentRequest = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); //이전 상태를 액션을 통해 다음상태로 만들어내는 함수
//immer가 알아서 불변성 지켜서 해줌

const reducer = (state = initialState, action) => (0,_util_produce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, draft => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      //좋아요
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      //좋아요 취소
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
      //게시글보기
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = action.data.length === 5;
      break;

    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case LOAD_POST_REQUEST:
      //단일게시글보기
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case ADD_POST_REQUEST:
      //게시글 작성
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostDone = false;
      draft.addPostError = action.data;
      break;

    case REMOVE_POST_REQUEST:
      //게시글 삭제
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(e => e.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostDone = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      //댓글작성
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      const post = draft.mainPosts.find(e => e.id === action.data.PostId);
      post.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = action.data;
      break;

    case UPLOAD_IMAGES_REQUEST:
      //이미지 업로드
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = action.data;
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      break;

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = action.error;
      break;

    case REMOVE_IMAGE:
      //이미지 제거
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case RETWEET_REQUEST:
      //리트윗
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ UNFOLLOW_REQUEST),
/* harmony export */   "Cq": () => (/* binding */ LOAD_MY_INFO_FAILURE),
/* harmony export */   "D7": () => (/* binding */ UNFOLLOW_SUCCESS),
/* harmony export */   "DG": () => (/* binding */ FOLLOW_FAILURE),
/* harmony export */   "Gm": () => (/* binding */ LOAD_OTHER_SUCCESS),
/* harmony export */   "I": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "KK": () => (/* binding */ REMOVE_POST_OF_ME),
/* harmony export */   "LJ": () => (/* binding */ LOAD_MY_INFO_SUCCESS),
/* harmony export */   "OR": () => (/* binding */ UNFOLLOW_FAILURE),
/* harmony export */   "Oy": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "PG": () => (/* binding */ CHANGE_NICKNAME_FAILURE),
/* harmony export */   "RZ": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "U_": () => (/* binding */ FOLLOW_REQUEST),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bP": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "dr": () => (/* binding */ CHANGE_NICKNAME_SUCCESS),
/* harmony export */   "iW": () => (/* binding */ LOAD_OTHER_REQUEST),
/* harmony export */   "kV": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "mD": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "mv": () => (/* binding */ FOLLOW_SUCCESS),
/* harmony export */   "o": () => (/* binding */ CHANGE_NICKNAME_REQUEST),
/* harmony export */   "oT": () => (/* binding */ LOAD_OTHER_FAILURE),
/* harmony export */   "pK": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "qq": () => (/* binding */ LOAD_MY_INFO_REQUEST),
/* harmony export */   "tP": () => (/* binding */ loginRequestAction),
/* harmony export */   "uF": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "vR": () => (/* binding */ logoutRequestAction),
/* harmony export */   "x6": () => (/* binding */ ADD_POST_TO_ME),
/* harmony export */   "yK": () => (/* binding */ LOG_IN_FAILURE)
/* harmony export */ });
/* unused harmony exports initialState, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_produce__WEBPACK_IMPORTED_MODULE_0__]);
_util_produce__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialState = {
  loadUserLoading: false,
  // 로드 유저
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  // loadFollowingsLoading: false,  //팔로잉,팔로워
  // loadFollowingsDone: false,
  // loadFollowingsError: null,
  // loadFollowersLoading: false,
  // loadFollowersDone: false,
  // loadFollowersError: null,
  loadOtherLoading: false,
  loadOtherDone: false,
  loadOtherError: false,
  me: null,
  userInfo: null
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_OTHER_REQUEST = 'LOAD_OTHER_REQUEST';
const LOAD_OTHER_SUCCESS = "LOAD_OTHER_SUCCESS";
const LOAD_OTHER_FAILURE = "LOAD_OTHER_FAILURE"; //팔로우 차단기능 생략
//동적 액션

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data //action이됨

  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return (0,_util_produce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, draft => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadUserLoading = false;
        draft.me = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = false;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = fasle;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpDone = true;
        draft.signUpLoading = false;
        draft.signUpError = false;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpDone = false;
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me.nickname = action.data.nickname;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(e => e.id !== action.data);
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = false;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data.userId
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        draft.followDone = false;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = false;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(e => e.id !== action.data.userId);
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        draft.unfollowDone = false;
        break;
      // case LOAD_FOLLOWERS_REQUEST:
      //   draft.loadFollowingsLoading = true;
      //   draft.loadFollowingsError = false;
      //   draft.loadFollowingsDone = false;
      //   break;
      // case LOAD_FOLLOWERS_SUCCESS:
      //   draft.loadFollowingsLoading = false;
      //   draft.me.Followers = action.data;
      //   draft.loadDone = true;
      //   break;
      // case LOAD_FOLLOWERS_FAILURE:
      //   draft.loadFollowiFollowingsngsLoading = false;
      //   draft.loadFollowingsError = action.error;
      //   draft.loadFollowingsDone = false;
      //   break;
      // case LOAD_FOLLOWINGS_REQUEST:
      //   draft.loadFollowersLoading = true;
      //   draft.loadFollowersError = false;
      //   draft.loadFollowersDone = false;
      //   break;
      // case LOAD_FOLLOWINGS_SUCCESS:
      //   draft.loadFollowersLoading = false;
      //   draft.me.Followings = action.data;
      //   draft.loadFollowersDone = true;
      //   break;
      // case LOAD_FOLLOWINGS_FAILURE:
      //   draft.loadFollowersLoading = false;
      //   draft.loadFollowersError = action.error;
      //   draft.loadFollowersDone = false;
      //   break;

      case LOAD_OTHER_REQUEST:
        draft.loadOtherLoading = true;
        draft.loadOtherError = false;
        draft.loadOtherDone = false;
        break;

      case LOAD_OTHER_SUCCESS:
        draft.loadOtherLoading = false;
        draft.userInfo = action.data;
        draft.loadOtherDone = true;
        break;

      case LOAD_OTHER_FAILURE:
        draft.loadOtherLoading = false;
        draft.loadOtherError = action.error;
        draft.loadOthersDone = false;
        break;

      default:
        return state;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2299);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9942);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _post__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _post__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const backURL = (0,_config_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.baseURL = backURL; //베이스 URL 설정하기

axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.withCredentials = true;
function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([//all은 배열을 받음, 동시에 실행
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z), //fork는 함수를  실행
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_post__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ postSaga)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3075);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _reducers_post__WEBPACK_IMPORTED_MODULE_2__, _reducers_user__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _reducers_post__WEBPACK_IMPORTED_MODULE_2__, _reducers_user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 //스크롤링

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/posts?lastId=${lastId || 0}&limit=5`);
}

function* loadPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(loadPostsAPI, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POSTS_SUCCESS */ .ZP,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POSTS_FAILURE */ .T5,
      error: err.response.data
    });
  }
} //단일게시글


function loadPostAPI(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/post/${id}`);
}

function* loadPost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(loadPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POST_SUCCESS */ .YQ,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POST_FAILURE */ .rl,
      error: err.response.data
    });
  }
} //유저 게시글가져오기


function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  console.log('액션', action);

  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(loadUserPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_USER_POSTS_SUCCESS */ .Ag,
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_USER_POSTS_FAILURE */ .N3,
      error: error.response.data
    });
  }
} //해쉬태그


function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(loadHashtagPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_HASHTAG_POSTS_SUCCESS */ .LF,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_HASHTAG_POSTS_FAILURE */ .uk,
      error: err.response.data
    });
  }
} //게시글 작성


function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/post`, data);
}

function* addPost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_POST_SUCCESS */ ._s,
      data: result.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .ADD_POST_TO_ME */ .x6,
      data: result.data.id
    });
  } catch (error) {
    console.error('로그', error);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_POST_FAILURE */ .tP,
      error: error.reponse.data
    });
  }
} //댓글 추가


function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(addCommentAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_COMMENT_SUCCESS */ .nv,
      data: result.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_COMMENT_FAILURE */ .rX,
      data: error.reponse.data
    });
  }
} //좋아요


function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(likePostAPI, action.data); //postId,UserId

    console.log("결과", result);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LIKE_POST_SUCCESS */ .Gz,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LIKE_POST_FAILURE */ .cT,
      error: err.response.data
    });
  }
} //좋아요취소


function unLikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`/post/${data}/like`);
}

function* unLikePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(unLikePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UNLIKE_POST_SUCCESS */ .XD,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UNLIKE_POST_FAILURE */ .gq,
      error: err.response.data
    });
  }
} //게시글 삭제


function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(removePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_POST_SUCCESS */ .rK,
      data: result.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .REMOVE_POST_OF_ME */ .KK,
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_POST_FAILURE */ .Ws,
      error: err.response.data
    });
  }
} //이미지 업로드


function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/post/images`, data); //formdata는 감싸면 안됨
}

function* uploadImages(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(uploadImagesAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_IMAGES_SUCCESS */ .kv,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_IMAGES_FAILURE */ .hX,
      error: err.response.data
    });
  }
} //리트윗


function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(retweetAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .RETWEET_SUCCESS */ .ZL,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .RETWEET_FAILURE */ .FM,
      error: err.response.data
    });
  }
} //지켜보고있다.


function* watchLoadPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POSTS_REQUEST */ .aO, loadPosts);
}

function* watchLoadUserPosts() {
  //유저검색
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_USER_POSTS_REQUEST */ .x5, loadUserPosts);
}

function* watchLoadHashtagPosts() {
  //해쉬태그
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_HASHTAG_POSTS_REQUEST */ .az, loadHashtagPosts);
}

function* watchLoadPost() {
  //단일
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POST_REQUEST */ .EG, loadPost);
}

function* watchAddPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_POST_REQUEST */ .z9, addPost);
}

function* watchAddComment() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_COMMENT_REQUEST */ .Ot, addComment);
}

function* watchRemovePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .REMOVE_POST_REQUEST */ .HU, removePost);
}

function* watchLikePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LIKE_POST_REQUEST */ .xD, likePost);
}

function* watchUnLikeost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UNLIKE_POST_REQUEST */ .VT, unLikePost);
}

function* watchuploadImages() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_IMAGES_REQUEST */ .QA, uploadImages);
}

function* watchretweet() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .RETWEET_REQUEST */ .a0, retweet);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchuploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddComment), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchRemovePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoadPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchUnLikeost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchretweet), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoadUserPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoadHashtagPosts)]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ userSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8176);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);
([_reducers_user__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/user/login', data);
}

function* login(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logInAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_SUCCESS */ .RZ,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_FAILURE */ .yK,
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('user/logout');
}

function* logOut() {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logOutAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_SUCCESS */ .kV
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_FAILURE */ .mD,
      error: error.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/user', data); //data는 객체
}

function* signUP(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(signUpAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_SUCCESS */ .I
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_FAILURE */ .bP,
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch(`user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(followAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOW_SUCCESS */ .mv,
      data: result.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOW_FAILURE */ .DG,
      error: error.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unfollowAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .UNFOLLOW_SUCCESS */ .D7,
      data: result.data
    });
  } catch (error) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .UNFOLLOW_FAILURE */ .OR,
      error: error.response.data
    });
  }
}

function loadUserAPI() {
  //내정보 가지고오기
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('/user');
}

function* loadUser(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_MY_INFO_SUCCESS */ .LJ,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_MY_INFO_FAILURE */ .Cq,
      error: err.response.data
    });
  }
}

function loadOtherAPI(data) {
  //남의 정보 가지고오기
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/user/${data}`);
}

function* loadOther(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadOtherAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_OTHER_SUCCESS */ .Gm,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_OTHER_FAILURE */ .oT,
      error: err.response.data
    });
  }
}

function changeNickAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch('/user/nickname', {
    nickname: data
  });
}

function* changeNick(action) {
  //닉네임변경
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(changeNickAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_NICKNAME_SUCCESS */ .dr,
      data: result.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_NICKNAME_FAILURE */ .PG,
      error: err.response.data
    });
  }
} //지켜보고있다


function* watchLoadUser() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_MY_INFO_REQUEST */ .qq, loadUser);
}

function* watchLogin() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_REQUEST */ .uF, login);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_REQUEST */ .Oy, logOut);
}

function* watchSignUp() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_REQUEST */ .pK, signUP);
}

function* watchFollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOW_REQUEST */ .U_, follow);
}

function* watchunFollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .UNFOLLOW_REQUEST */ .Bk, unfollow);
}

function* watchChangeNick() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_NICKNAME_REQUEST */ .o, changeNick);
}

function* watchotherInfo() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_OTHER_REQUEST */ .iW, loadOther);
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadUser), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogin), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchFollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchunFollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchChangeNick), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchotherInfo)]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5998);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2135);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_3__, _reducers__WEBPACK_IMPORTED_MODULE_4__, _sagas__WEBPACK_IMPORTED_MODULE_5__]);
([redux_saga__WEBPACK_IMPORTED_MODULE_3__, _reducers__WEBPACK_IMPORTED_MODULE_4__, _sagas__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const configureStore = context => {
  const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const middlewares = [sagaMiddleware];
  const enhancer =  true ? (0,redux__WEBPACK_IMPORTED_MODULE_0__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares)) : 0;
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(configureStore, {
  debug: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((...args) => {
  (0,immer__WEBPACK_IMPORTED_MODULE_0__.enableES5)();
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(...args);
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;