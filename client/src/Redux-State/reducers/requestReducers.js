import {
  FETCH_CONVERSATIONS_SUCCESS,
  FETCH_CONVERSATIONS_FAILURE,
  FETCH_CONVERSATIONS_REQUEST,
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
