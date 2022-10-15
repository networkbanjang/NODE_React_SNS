export const initialState = {

  mainPosts: [{
    id: 1,
    User: {
      id: 1,
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
  postAdded: false,  //업로드성공여부 기본값은 false

};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미',
  User: {
    id: 1,
    nickname: '곧지워',
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer