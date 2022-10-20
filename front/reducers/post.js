import produce from 'immer';

export const initialState = {
  mainPosts: [],
  imagePaths: [],         //이미지 업로드할때 저장되는 경로
  hasMorePosts: true,

  addPostLoading: false,
  addPostDone: false,  //업로드성공여부 기본값은 false
  addPostError: false,

  addCommentLoading: false,   //댓글
  addCommentDone: false,
  addCommentError: false,

  removePostLoading: false,   //삭제
  removePostDone: false,
  removePostError: false,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';


export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';



export const addPostRequest = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addCommentRequest = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});



//이전 상태를 액션을 통해 다음상태로 만들어내는 함수
//immer가 알아서 불변성 지켜서 해줌
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length === 11;
      break;
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;


    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.addPostError = null;
      draft.mainPosts.unshift(action.data);
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostDone = false;
      draft.addPostError = action.data;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;
    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.removePostError = null;
      draft.mainPosts = draft.mainPosts.filter((e) => e.id !== action.data);
      break;
    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostDone = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS:
      console.log(action.data.PostId);
      const post = draft.mainPosts.find((e) => e.id === action.data.PostId );
      post.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = action.data;
      break;
    default:
      break;
  }
});


export default reducer;