import axios from "axios";

export function fetchConversationRequest() {
  return {
    type: "FETCH_CONVERSATIONS_REQUEST",
  };
}
export function fetchConversationSuccess(conversation) {
  return {
    type: "FETCH_CONVERSATIONS_SUCCESS",
    payload: conversation,
  };
}
export function fetchConversationFailure(error) {
  return {
    type: "FETCH_CONVERSATIONS_FAILURE",
    payload: error,
  };
}
const user = [];
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

export function fetchUserRequest() {
  return {
    type: "FETCH_USER_REQUEST",
  };
}
export function fetchUserSuccess(user) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: user,
  };
}
export function fetchUserFailure(error) {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
}

export const fetchUser = (userId) => {
  console.log(userId);

  return (dispatch) => {
    dispatch(fetchUserRequest());

    axios
      .get(`http://localhost:3300/api/v1/login`)
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
// fetch user

export function fetchUserProfileRequest() {
  return {
    type: "FETCH_USER_PROFILE_REQUEST",
  };
}
export function fetchUseProfileSuccess(data) {
  return {
    type: "FETCH_USER_PROFILE_SUCCESS",
    payload: data,
  };
}
export function fetchUserProfileFailure(error) {
  return {
    type: "FETCH_USER_PROFILE_FAILURE",
    payload: error,
  };
}
// fetch message

export function fetchMessagesRequest() {
  return {
    type: "FETCH_MESSAGE_REQUEST",
  };
}
export function fetchMessagesSuccess(currentChat) {
  return {
    type: "FETCH_MESSAGE_SUCCESS",
    payload: currentChat,
  };
}
export function fetchMessagesFailure(error) {
  return {
    type: "FETCH_MESSAGE_FAILURE",
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
