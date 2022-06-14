import axios from "axios";
export function fetchConversationRequest() {
  return {
    type: "FETCH_CONVERSATIONS_REQUEST",
  };
}
export function fetchConversationSuccess(data) {
  return {
    type: "FETCH_CONVERSATIONS_SUCCESS",
    payload: data,
  };
}
export function fetchConversationFailure(error) {
  return {
    type: "FETCH_CONVERSATIONS_FAILURE",
    payload: error,
  };
}

export const fetchConversations = (data) => {
  console.log("qwweewewewewwe");
  console.log(data);
  return async function (dispatch) {
    dispatch(fetchConversationRequest);
    axios
      .get(`http://localhost:3200/api/v1/conversation/629f66f6cd16b099af3c7dda`)
      .then((response) => {
        dispatch(fetchConversationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchConversationFailure(error));
      });
  };
};

// fetch user profile

export function fetchUserRequest() {
  return {
    type: "FETCH_USER_REQUEST",
  };
}
export function fetchUserSuccess(data) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: data,
  };
}
export function fetchUserFailure(error) {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
}

export const fetchUser = (data) => {
  return async function (dispatch) {
    dispatch(fetchUserRequest);
    axios
      .get("http://localhost:3200/api/v1/login")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};
