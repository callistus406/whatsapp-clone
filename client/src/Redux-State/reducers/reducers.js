import { DISPLAY_TOGGLE, DISPLAY_CHAT_TOGGLE } from "../actions/actionTypes";

const initialState = {
  displayProfileContainer: false,
  displayChatContainer: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_TOGGLE:
      return {
        ...state,
        displayProfileContainer: !state.displayProfileContainer,
      };
    default:
      return state;
  }
}
export function displayChatReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_CHAT_TOGGLE:
      return {
        ...state,
        displayChatContainer: !state.displayChatContainer,
      };
    default:
      return state;
  }
}
