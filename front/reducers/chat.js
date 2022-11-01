import produce from '../util/produce';

export const initialState = {
  chatroom: [],

};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {

    default:
      break;
  }
});


export default reducer;