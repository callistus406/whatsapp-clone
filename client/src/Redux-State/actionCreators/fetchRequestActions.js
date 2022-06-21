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
  return async function (dispatch, getState) {
    dispatch(fetchConversationRequest());
    console.log(data);

    // const userState = getState();
    // // const userId = userState.data._id;
    // console.log(userState);
    axios
      .get(`http://localhost:3300/api/v1/conversation/${data}`)
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

export const fetchUser = (userId) => {
  console.log(userId);

  return function (dispatch, getState) {
    dispatch(fetchUserRequest());
    const userState = getState();
    axios
      .get(`http://localhost:3300/api/v1/login`)
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
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

export const fetchUserProfile = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch(fetchUserProfileRequest());

    axios
      .get(`http://localhost:3300/api/v1/userProfile/${userId}`)
      .then((response) => {
        dispatch(fetchUseProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserProfileFailure(error));
      });
  };
};
