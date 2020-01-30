export const sendMessage = payload => {
  return {
    type: 'SEND_MESSAGE',
    payload
  };
};

export const updateUser = payload => {
  return {
    type: 'UPDATE_USER',
    payload
  };
};
