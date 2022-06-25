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
} from "../actions/fetchDataActionsTypes";

import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "../actions/fetchDataActionsTypes";
const initialStateOfConversation = {
  loading: false,
  data: [],
  error: "",
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
        error: "",
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
  error: "",
};

export const userRequestReducer = (state = initialStateOfUser, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
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
  error: "",
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
        error: "",
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
  error: "",
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
