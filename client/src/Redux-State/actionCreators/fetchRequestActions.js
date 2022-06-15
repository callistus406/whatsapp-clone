import axios from "axios";
import userId from "../../Pages/Home/Home";
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
const user = [];
export const fetchConversations = (data) => {
  console.log(data);
  return async function (dispatch, getState) {
    dispatch(fetchConversationRequest);
    console.log(getState);
    const userState = getState();
    const userId = userState.user.data._id;
    axios
      .get(`http://localhost:3200/api/v1/conversation/${userId}`)
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
