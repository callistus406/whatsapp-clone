import {
  FETCH_CONVERSATIONS_SUCCESS,
  FETCH_CONVERSATIONS_FAILURE,
  FETCH_CONVERSATIONS_REQUEST,
  // ..............................
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  // .................................
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  // ............................
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
  // .................................
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '../actions/fetchDataActionsTypes';

import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  SEND_REFRESH_TOKEN_SUCCESS,
  SEND_REFRESH_TOKEN_REQUEST,
  SEND_REFRESH_TOKEN_FAILURE,
} from '../actions/fetchDataActionsTypes';
const initialStateOfConversation = {
  loading: false,
  data: [],
  error: '',
};

export const requestReducer = (state = initialStateOfConversation, action) => {
  switch (action.type) {
    case FETCH_CONVERSATIONS_REQUEST:
      return {
        loading: true,
      };
    case FETCH_CONVERSATIONS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_CONVERSATIONS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialStateOfUser = {
  loading: false,
  data: [],
  error: '',
};

export const userRequestReducer = (state = initialStateOfUser, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case LOGIN_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// profile

const initialStateOfUserProfile = {
  loading: false,
  data: [],
  error: '',
};

export const userProfileRequestReducer = (
  state = initialStateOfUserProfile,
  action
) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_USER_PROFILE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// login

const initialLoginState = {
  loading: false,
  data: [],
  error: '',
};
export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case LOGIN_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// message
const initialMessageState = {
  loading: false,
  data: [],
  error: '',
};
export const currentMessageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE_REQUEST:
      return {
        loading: true,
      };
    case FETCH_MESSAGE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_MESSAGE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
// refresh token reducer
const initialRefreshTokenState = {
  loading: false,
  data: [],
  error: '',
};
export const refreshTokenReducer = (
  state = initialRefreshTokenState,
  action
) => {
  switch (action.type) {
    case SEND_REFRESH_TOKEN_REQUEST:
      return {
        loading: true,
      };
    case SEND_REFRESH_TOKEN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case SEND_REFRESH_TOKEN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// get token
const initialTokenState = {
  loading: false,
  data: [],
  error: '',
};
// export const getTokenReducer = (state = initialTokenState, action) => {
//   switch (action.type) {
//     case GET_TOKEN_REQUEST:
//       return {
//         loading: true,
//       };
//     case GET_TOKEN_SUCCESS:
//       return {
//         loading: false,
//         data: action.payload,
//         error: '',
//       };
//     case GET_TOKEN_FAILURE:
//       return {
//         loading: false,
//         data: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
