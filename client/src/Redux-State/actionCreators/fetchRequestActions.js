import axios from 'axios';

export function fetchConversationRequest() {
  return {
    type: 'FETCH_CONVERSATIONS_REQUEST',
  };
}
export function fetchConversationSuccess(conversation) {
  return {
    type: 'FETCH_CONVERSATIONS_SUCCESS',
    payload: conversation,
  };
}
export function fetchConversationFailure(error) {
  return {
    type: 'FETCH_CONVERSATIONS_FAILURE',
    payload: error,
  };
}
// const user = [];
export const fetchConversations = (conversation_id) => {
  console.log(conversation_id);
  return (dispatch) => {
    dispatch(fetchConversationRequest());

    axios
      .get(`http://localhost:3300/api/v1/conversation/${conversation_id}`)
      .then((response) => {
        const conversations = response.data;
        dispatch(fetchConversationSuccess(conversations));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchConversationFailure(errorMsg));
      });
  };
};

// fetch user profile

export function userLoginRequest() {
  return {
    type: 'LOGIN_USER_REQUEST',
  };
}
export function userLoginSuccess(loginData) {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: loginData,
  };
}
export function userLoginFailure(error) {
  return {
    type: 'LOGIN_USER_FAILURE',
    payload: error,
  };
}

export const userLogin = (username, phone) => {
  return (dispatch) => {
    dispatch(userLoginRequest);
    // const { username, phone } = loginData;
    axios
      .post(`http://localhost:3300/api/v1/login`, {
        username,
        phone,
      })
      .then((response) => {
        dispatch(userLoginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userLoginFailure(error.message));
      });
  };
};
// fetch user

export function fetchUserProfileRequest() {
  return {
    type: 'FETCH_USER_PROFILE_REQUEST',
  };
}
export function fetchUseProfileSuccess(data) {
  return {
    type: 'FETCH_USER_PROFILE_SUCCESS',
    payload: data,
  };
}
export function fetchUserProfileFailure(error) {
  return {
    type: 'FETCH_USER_PROFILE_FAILURE',
    payload: error,
  };
}
// fetch message

export function fetchMessagesRequest() {
  return {
    type: 'FETCH_MESSAGE_REQUEST',
  };
}
export function fetchMessagesSuccess(currentChat) {
  return {
    type: 'FETCH_MESSAGE_SUCCESS',
    payload: currentChat,
  };
}
export function fetchMessagesFailure(error) {
  return {
    type: 'FETCH_MESSAGE_FAILURE',
    payload: error,
  };
}
// send message

export function sendMessagesRequest() {
  return {
    type: 'SEND_MESSAGE_REQUEST',
  };
}
export function sendMessagesSuccess(message) {
  return {
    type: 'SEND_MESSAGE_SUCCESS',
    payload: message,
  };
}
export function sendMessagesFailure(error) {
  return {
    type: 'SEND_MESSAGE_FAILURE',
    payload: error,
  };
}
// send refresh token

export function sendRefreshTokenRequest() {
  return {
    type: 'SEND_REFRESH_TOKEN_REQUEST',
  };
}
export function sendRefreshTokenSuccess(message) {
  return {
    type: 'SEND_REFRESH_TOKEN_SUCCESS',
    payload: message,
  };
}
export function sendRefreshTokenFailure(error) {
  return {
    type: 'SEND_REFRESH_TOKEN_FAILURE',
    payload: error,
  };
}

export const fetchMessages = (conversationId) => {
  console.log(conversationId);
  return function (dispatch) {
    dispatch(fetchMessagesRequest());
    axios
      .get(`http://localhost:3300/api/v1/message/${conversationId}`)
      .then((response) => {
        dispatch(fetchMessagesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMessagesFailure(error));
      });
  };
};

export const fetchUserProfile = (userId) => {
  return function (dispatch) {
    dispatch(fetchUserProfileRequest);

    axios
      .get(`http://localhost:3300/api/v1/user/${userId}`)
      .then((response) => {
        dispatch(fetchUseProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserProfileFailure(error));
      });
  };
};

export const sendMessages = (conversationId, sender, text) => {
  console.log(conversationId);
  return function (dispatch) {
    dispatch(sendMessagesRequest());
    const message = {
      conversationId,
      sender,
      text,
    };
    axios
      .post(`http://localhost:3300/api/v1/message`, message)
      .then((response) => {
        dispatch(sendMessagesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(sendMessagesFailure(error));
      });
  };
};

// get refresh token

export const getRefreshToken = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch(sendMessagesRequest());

    axios
      .post(`http://localhost:3300/api/v1/refresh`, data.refreshToken)
      .then((response) => {
        dispatch(sendMessagesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(sendMessagesFailure(error));
      });
  };
};
