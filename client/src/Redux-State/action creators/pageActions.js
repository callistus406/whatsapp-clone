import {
  SHOW_PROFILE,
  HIDE_PROFILE,
  SHOW_STATUS,
  HIDE_STATUS,
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
  SHOW_GROUP_INFO,
  HIDE_GROUP_INFO,
  SELECT_CONTACTS,
  SEARCH_GROUP_PARTICIPANTS,
  TOGGLE_GRP_STARRED_MSGS,
  SHOW_GROUP_MSG,
} from "../actions/actionTypes";

// section for status bar action creators
export function showProfile(bool) {
  return {
    type: SHOW_PROFILE,
    payload: bool,
    info: "this action  will display the profile slide",
  };
}
export function hideProfile(bool) {
  return {
    type: HIDE_PROFILE,
    payload: bool,
    info: "this action  will hide the profile slide",
  };
}

export function newChatToggle() {
  return {
    type: TOGGLE_NEW_CHAT,
    info: "this action  will display the new chat slide",
  };
}

export function showStatus(bool) {
  return {
    type: SHOW_STATUS,
    payload: bool,
    info: "this action  will display the status slide",
  };
}
export function hideStatus(bool) {
  return {
    type: SHOW_STATUS,
    payload: bool,

    info: "this action  will hide the status slide",
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
export function showGroupInfo(bool) {
  return {
    type: SHOW_GROUP_INFO,
    payload: bool,
    info: "this action  will display the group information ",
  };
}
export function hideGroupInfo(bool) {
  return {
    type: HIDE_GROUP_INFO,
    payload: bool,
    info: "this action  will hide the group information ",
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
// starred grp action
export function toggleStarredGrpMsgs() {
  return {
    type: TOGGLE_GRP_STARRED_MSGS,
    info: "this action  will display group participants",
  };
}
// display group message
export function displayGrpMsgAction(bool) {
  return {
    type: SHOW_GROUP_MSG,
    payload: bool,
    info: "this action  will display message",
  };
}
