// INITIAL STATE
const initialState = {
  messages: [],
  currentUser: 'user-1'
};

// REDUCER
const chatReducer = (state = initialState, action) => {
  if (action.type === 'SEND_MESSAGE') {
    const newMessage = {
      text: action.payload,
      timestamp: new Date().getTime(),
      user: state.currentUser
    };

    state.messages = [...state.messages, newMessage];
    return Object.assign({}, state);
  }

  if (action.type === 'UPDATE_USER') {
    state.currentUser = action.payload;
    return Object.assign({}, state);
  }

  return state;
};

export default chatReducer;
