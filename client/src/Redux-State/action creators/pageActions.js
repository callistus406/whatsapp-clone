import {
  TOGGLE_PROFILE,
  TOGGLE_STATUS,
  TOGGLE_NEW_CHAT,
  TOGGLE_OPTIONS,
  TOGGLE_NEW_GROUP,
  TOGGLE_ARCHIVE,
  TOGGLE_STARRED_MSGS,
  TOGGLE_SETTINGS,
  LOGOUT,
  TOGGLE_CHAT_WALLPAPER,
  TOGGLE_BLOCKED_CONTACTS,
  TOGGLE_KEYBOARD_SHORTCUTS,
  TOGGLE_THEME,
  TOGGLE_HELP,
  TOGGLE_NOTIFICATION,
  TOGGLE_MSG_SEARCH,
  TOGGLE_GROUP_INFO,
  SELECT_CONTACTS,
  SEARCH_GROUP_PARTICIPANTS,
} from "../actions/actionTypes";

// section for status bar action creators
export function profileToggle() {
  return {
    type: TOGGLE_PROFILE,
    info: "this action  will display the profile slide",
  };
}

export function newChatToggle() {
  return {
    type: TOGGLE_NEW_CHAT,
    info: "this action  will display the new chat slide",
  };
}

export function statusToggle() {
  return {
    type: TOGGLE_STATUS,
    info: "this action  will display the status slide",
  };
}

export function optionsToggle() {
  return {
    type: TOGGLE_OPTIONS,
    info: "this action  will display the options dropdown slide",
  };
}
// ACTION FOR MSG SEARCH BAR
export function toggleMsgSearch() {
  return {
    type: TOGGLE_MSG_SEARCH,
    info: "this action  will display the message search slide ",
  };
}
// ACTION FOR GROUP INFO
export function toggleGroupInfo() {
  return {
    type: TOGGLE_GROUP_INFO,
    info: "this action  will display the group information ",
  };
}

//ACTIONS CREATORS FOR OPTIONS WHICH IS A CHILD OF IN STATUS BAR ACTIONS

export function newGroupToggle() {
  return {
    type: TOGGLE_NEW_GROUP,
    info: "this action  will display the new group layout",
  };
}

export function archiveToggle() {
  return {
    type: TOGGLE_ARCHIVE,
    info: "this action  will display the archive layout",
  };
}

export function starredMsgsToggle() {
  return {
    type: TOGGLE_STARRED_MSGS,
    info: "this action  will display the starred messages",
  };
}

export function settingsToggle() {
  return {
    type: TOGGLE_SETTINGS,
    info: "this action  will display the settings Layout ",
  };
}
export function logout() {
  return {
    type: LOGOUT,
    info: "this action  will log the user out of the system",
  };
}

// SETTINGS SUB MENU
export function toggleNotification() {
  return {
    type: TOGGLE_NOTIFICATION,
    info: "this action  will display archived messages",
  };
}
export function toggleWallpaper() {
  return {
    type: TOGGLE_CHAT_WALLPAPER,
    info: "this action  will display system wallpapers",
  };
}

export function toggleBlockedContacts() {
  return {
    type: TOGGLE_BLOCKED_CONTACTS,
    info: "this action  will display blocked contacts",
  };
}

export function toggleKeyboardShortcuts() {
  return {
    type: TOGGLE_KEYBOARD_SHORTCUTS,
    info: "this action  will display keyboardShortcuts",
  };
}

export function toggleTheme() {
  return {
    type: TOGGLE_THEME,
    info: "this action  will display the system themes ",
  };
}

export function toggleHelp() {
  return {
    type: TOGGLE_HELP,
    info: "this action  will display help",
  };
}
// THIS WILL SELECT CONTACTS
export function toggleSelectContacts(data) {
  return {
    type: SELECT_CONTACTS,
    payload: data,
    info: "this action  will individual contacts",
  };
}
export function toggleGrpParticipants() {
  return {
    type: SEARCH_GROUP_PARTICIPANTS,
    info: "this action  will display group participants",
  };
}
