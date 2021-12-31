import { DISPLAY_TOGGLE, DISPLAY_CHAT_TOGGLE } from "../actions/actionTypes";

export function profileToggle() {
  return {
    type: DISPLAY_TOGGLE,
    info: "this action  will display the profile slide",
  };
}

export function newChatToggle() {
  return {
    type: DISPLAY_CHAT_TOGGLE,
    info: "this action  will display the new chat slide",
  };
}
