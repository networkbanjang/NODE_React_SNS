import produce from 'immer';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 8899,
      nickname: '곧지워',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://img.stibee.com/21735_1662999430.png'
    },{
    src: 'https://www.techm.kr/news/photo/202007/73141_65065_2532.png'
  }, {
    src: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTRfMTQ2/MDAxNjE1NjQ4MTg4NjM4.gQjXb85eUe25ZC9UVvtRIhRsYhL_jfjHcTjGuGIjAnAg.h_8AZrIxuRghWVj_gBbtQbiKDEvKPDxht1KeT1QdtB4g.JPEG.bonamy/IMG_2024.jpg?type=w800'
  }],
    Comments: [{
      User: {
        nickname: '후후'
      },
      content: '스바라시~'
    }, {
      User: {
        nickname: '닉네임'
      },
      content: '내용을 적어주세요 더미데이터~'
    }]
  }],
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

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '닉',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: 123123,
  content: data,
  User: {
    id: 1,
    nickname: 'ㅈㅈㅈ',
  },
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
      draft.hasMorePosts = draft.mainPosts.length < 50;
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
      draft.mainPosts.unshift(dummyPost(action.data));
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
      const post = draft.mainPosts.find((e) => e.id === action.data.postId);
      post.Comments.unshift(dummyComment(action.data.content));
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