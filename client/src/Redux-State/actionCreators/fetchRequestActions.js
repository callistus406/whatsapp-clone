import axios from 'axios';
import jwtDecode from 'jwt-decode';
import axiosJWT from '../../utils/axiosInstance';
import { getToken } from './pageActions';
// const jwtAxiosInterceptor = axios.create();

// jwtAxiosInterceptor.interceptors.request.use(
//   async (config) => {
//     console.log(config);

//     let currentDate = new Date();
//     // const decodedToken = jwtDecode(props.userInfo.payload.accessToken);
//     //.exp * 1000 < currentDate.getTime()
//     if (decodedToken) {
//       getRefreshToken();
//       config.headers['authorization'] = 'Bearer ' + data.accessToken;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
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
  return (dispatch, getState) => {
    dispatch(fetchConversationRequest());

    axios
      .get(`/conversation/${conversation_id}`, {
        withCredentials: true,
        headers: {
          authorization: 'Bearer ' + getState().login.data.payload.accessToken,
        },
      })
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
    console.log(username, phone);
    axios
      .post(`/login`, {
        username,
        phone,
      })
      .then((response) => {
        const data = response.data;
        dispatch(getToken(data.payload.accessToken, data.payload.refreshToken));
        dispatch(userLoginSuccess(data));

        // const decoded = jwtDecode(data.payload.accessToken);
        // if (decoded) {
        // response.headers['authorization'] =
        //   'Bearer ' + data.payload.accessToken;
        // console.log(respo);
        // }
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
  return function (dispatch, getState) {
    dispatch(fetchMessagesRequest());
    axios
      .get(`/message/${conversationId}`, {
        withCredentials: true,
        headers: {
          authorization: 'Bearer ' + getState().login.data.payload.accessToken,
        },
      })
      .then((response) => {
        dispatch(fetchMessagesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMessagesFailure(error));
      });
  };
};

export const fetchUserProfile = (userId) => {
  return function (dispatch, getState) {
    dispatch(fetchUserProfileRequest);

    axios
      .get(`/user/${userId}`, {
        withCredentials: true,
        headers: {
          authorization: 'Bearer ' + getState().login.data.payload.accessToken,
        },
      })
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
  return function (dispatch, getState) {
    dispatch(sendMessagesRequest());
    const message = {
      conversationId,
      sender,
      text,
    };
    axios
      .post(`/message`, message, {
        withCredentials: true,
        headers: {
          authorization: 'Bearer ' + getState().login.data.payload.accessToken,
        },
      })
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
  // console.log(data);
  return function (dispatch, getState) {
    dispatch(sendMessagesRequest());
    // console.log(getState().login.data.payload.refreshToken));

    axios
      .post(
        `/refresh`,
        {
          token: getState().login.data.payload.refreshToken,
        },
        {
          withCredentials: true,
          headers: {
            authorization:
              'Bearer ' + getState().login.data.payload.accessToken,
          },
        }
      )
      .then((response) => {
        dispatch(sendMessagesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(sendMessagesFailure(error));
      });
  };
};
// get  token

// export const getToken = (data) => {
//   // console.log(data);
//   return function (dispatch, getState) {
//     dispatch(sendMessagesRequest());
//     // console.log(getState().login.data.payload.refreshToken));

//     axios
//       .post(
//         `/refresh`,
//         {
//           token: getState().login.data.payload.refreshToken,
//         },
//         {
//           withCredentials: true,
//           headers: {
//             authorization:
//               'Bearer ' + getState().login.data.payload.accessToken,
//           },
//         }
//       )
//       .then((response) => {
//         dispatch(sendMessagesSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(sendMessagesFailure(error));
//       });
//   };
// };
