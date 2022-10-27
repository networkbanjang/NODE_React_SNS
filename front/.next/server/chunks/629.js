"use strict";
exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 5025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(355);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3075);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_5__]);
_reducers_post__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const CommentForm = ({
  post
}) => {
  const [commentText, onChangeComment, setCommentText] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('');
  const {
    addCommentDone,
    addCommentLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.post);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__/* .ADD_COMMENT_REQUEST */ .Ot,
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]); //아이디

  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user).me?.id; //옵셔널 체이닝 AA ?. BB == 있으면 해라

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.TextArea, {
        value: commentText,
        onChange: onChangeComment,
        rows: 4
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        style: {
          zIndex: 1
        },
        children: "\uC791\uC131"
      })]
    })
  });
};

CommentForm.prototype = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    User: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    createAt: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object))
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8176);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_3__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FollowButton = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    me,
    followLoading,
    unfollowLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);
  const isFollowing = me && me.Followings.find(e => e.id === post.User.id);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .UNFOLLOW_REQUEST */ .Bk,
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .FOLLOW_REQUEST */ .U_,
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
    loading: followLoading || unfollowLoading,
    onClick: onClick,
    children: isFollowing ? '언팔로우' : '팔로우'
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1629:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Postimages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8073);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5025);
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4349);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3075);
/* harmony import */ var _Follow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7406);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment_locale_ko__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4285);
/* harmony import */ var moment_locale_ko__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ko__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentForm__WEBPACK_IMPORTED_MODULE_6__, _reducers_post__WEBPACK_IMPORTED_MODULE_8__, _Follow__WEBPACK_IMPORTED_MODULE_9__]);
([_CommentForm__WEBPACK_IMPORTED_MODULE_6__, _reducers_post__WEBPACK_IMPORTED_MODULE_8__, _Follow__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












 // 이줄 추가





const PostCard = ({
  post
}) => {
  moment__WEBPACK_IMPORTED_MODULE_11___default().locale('ko'); //날짜 라이브러리 한글로 바꾸기

  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user).me?.id; //옵셔널 체이닝 AA ?. BB == 있으면 해라

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //css영역

  const style = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => ({
    marginBottom: '20px'
  }), []); //state 영역

  const {
    0: comment,
    1: setComment
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false); //이벤트 처리 영역

  const onLike = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__/* .LIKE_POST_REQUEST */ .xD,
      data: post.id
    });
  }, []);
  const onUnLike = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__/* .UNLIKE_POST_REQUEST */ .VT,
      data: post.id
    });
  }, []);
  const onComment = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    setComment(prev => !prev);
  }, []);
  const onRemovePost = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__/* .REMOVE_POST_REQUEST */ .HU,
      data: post.id
    });
  }, []);
  const onRetweet = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__/* .RETWEET_REQUEST */ .a0,
      data: post.id
    }, [id]);
  });
  const liked = post.Likers.find(e => e.id === id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Card, {
      cover: post.Images[0] && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Postimages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        images: post.Images
      }),
      actions: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RetweetOutlined, {
        onClick: onRetweet
      }, "reteet"), //리트윗 아이콘 배열엔 반드시 key
      liked ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.HeartTwoTone, {
        twoToneColor: "red",
        onClick: onUnLike
      }, "heart") //하트아이콘 비활성화
      : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.HeartOutlined, {
        onClick: onLike
      }, "heart"),
      /*#__PURE__*/
      //하트 아이콘 활성화
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.MessageOutlined, {
        onClick: onComment
      }, "message"),
      /*#__PURE__*/
      //리플 아이콘
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Popover, {
        content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button.Group, {
          children: id && post.User.id === id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
              type: "primary",
              children: "\uC218\uC815"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
              type: "danger",
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }), " "]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
            children: "\uC2E0\uACE0"
          })
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EllipsisOutlined, {})
      }, "more")],
      title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null,
      extra: id && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Follow__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        post: post
      }),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Card, {
        cover: post.Retweet.Images[0] && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Postimages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          images: post.Retweet.Images
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          style: {
            float: 'right'
          },
          children: moment__WEBPACK_IMPORTED_MODULE_11___default()(post.createdAt).format('YYYY-MM-DD')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Card.Meta, {
          avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
            href: `/user/${post.Retweet.User.id}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Avatar, {
                children: post.Retweet.User.nickname[0]
              }), " "]
            })
          }),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            postData: post.Retweet.content
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          style: {
            float: 'right'
          },
          children: moment__WEBPACK_IMPORTED_MODULE_11___default()(post.createdAt).fromNow()
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Card.Meta, {
          avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
            href: `/user/${post.User.id}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Avatar, {
                children: post.User.nickname[0]
              }), " "]
            })
          }),
          title: post.User.nickname,
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            postData: post.content
          })
        })]
      })
    }), comment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        post: post
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.List, {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Comment, {
            author: item.User.nickname,
            avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
              href: `/user/${item.User.id}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Avatar, {
                  children: item.User.nickname[0]
                })
              })
            }),
            content: item.content
          })
        })
      })]
    })]
  });
};

PostCard.prototype = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    User: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    createAt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const PostCardContent = ({
  postData
}) => {
  //#해시태그 #익스프레스
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    children: postData.split(/(#[^\s#]*)/g).map(v => {
      if (v.match(/(#[^\s#]*)/g)) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: `/hashtag/${v.slice(1)}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
            children: v
          })
        }, v);
      }

      return v;
    })
  });
};

PostCardContent.prototype = {
  postData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardContent);

/***/ }),

/***/ 8073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Postimages)
});

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/imagesZoom/styles.js


const Global = (0,external_styled_components_.createGlobalStyle)([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]);
const Overlay = external_styled_components_default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-70ze4t-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]); //헤더안에 &h1 이런식으로 css 넣는다

const Header = external_styled_components_default().header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-70ze4t-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const SlickWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "sc-70ze4t-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const CloseBtn = external_styled_components_default()(icons_.CloseOutlined).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-70ze4t-3"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
const Indicator = external_styled_components_default().div.withConfig({
  displayName: "styles__Indicator",
  componentId: "sc-70ze4t-4"
})(["text-align:center;& > div{position:fixed;width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;bottom:10px;}"]);
const ImgWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-70ze4t-5"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__(5504);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/imagesZoom/index.js







const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  console.log(onClose);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Overlay, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Global, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx(CloseBtn, {
        onClick: onClose
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(SlickWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), {
          initialSlide: 0 //시작 페이지
          ,
          beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
          infinite: true //끝사진에서 첫번째로
          ,
          arrows: false,
          slidesToShow: 1 //한번에 보여줄 사진 수
          ,
          slidesToScroll: 1 //넘길 사진
          ,
          children: images.map(v => /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `${(0,config/* default */.Z)()}/${v.src}`,
              alt: v.src
            })
          }, v.src))
        }), /*#__PURE__*/jsx_runtime_.jsx(Indicator, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const imagesZoom = (ImagesZoom);
;// CONCATENATED MODULE: ./components/Postimages.js









const PostImages = ({
  images
}) => {
  //스타일설정
  const style = (0,external_react_.useMemo)(() => ({
    display: 'inline-block',
    width: '50%',
    textAlign: 'center'
  }), []);
  const {
    0: showImageZoom,
    1: setShowImageZoom
  } = (0,external_react_.useState)(false);
  const onZoom = (0,external_react_.useCallback)(() => {
    setShowImageZoom(true);
  }, []);
  const onClose = (0,external_react_.useCallback)(() => {
    setShowImageZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation",
        src: `${(0,config/* default */.Z)()}/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), showImageZoom && /*#__PURE__*/jsx_runtime_.jsx(imagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  if (images.length === 2) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation",
        width: "50%",
        src: `${(0,config/* default */.Z)()}${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation",
        width: "50%",
        src: `${(0,config/* default */.Z)()}${images[1].src}`,
        alt: images[1].src,
        onClick: onZoom
      }), showImageZoom && /*#__PURE__*/jsx_runtime_.jsx(imagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      role: "presentation",
      width: "50%",
      src: `${(0,config/* default */.Z)()}/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      role: "presentation",
      style: style,
      onClick: onZoom,
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\uB354\uBCF4\uAE30"]
    }), showImageZoom && /*#__PURE__*/jsx_runtime_.jsx(imagesZoom, {
      images: images,
      onClose: onClose
    })]
  });
};

PostImages.prototype = {
  images: external_prop_types_default().arrayOf((external_prop_types_default()).object)
};
/* harmony default export */ const Postimages = (PostImages);

/***/ })

};
;