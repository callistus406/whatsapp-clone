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
  DISPLAY_SETTINGS,
  LOGOUT,
  TOGGLE_HELP,
  TOGGLE_THEME,
  TOGGLE_KEYBOARD_SHORTCUTS,
  TOGGLE_NOTIFICATION,
  TOGGLE_CHAT_WALLPAPER,
  TOGGLE_BLOCKED_CONTACTS,
  TOGGLE_MSG_SEARCH,
  SHOW_GROUP_INFO,
  HIDE_GROUP_INFO,
  SELECT_CONTACTS,
  SEARCH_GROUP_PARTICIPANTS,
  CLOSE_SEARCH_GROUP_PARTICIPANTS,
  TOGGLE_GRP_STARRED_MSGS,
  SHOW_GROUP_MSG,
  DISPLAY_SECURITY,
  DISPLAY_PRIVACY,
  DISPLAY_CONTACT_INFO,
  SEARCH_CONTACT_MSG,
  SHOW_CONVERSATIONS,
  SHOW_MESSAGE,
  SHOW_CONVERSATION_ID,
  GET_MESSAGE,
  GET_TOKEN,
  GET_CONTACT_CHAT_PROFILE,
} from '../actions/actionTypes';
const initialState = {
  displayProfileContainer: false,
  displayStatusContainer: false,
  displayChatContainer: false,
  displayOptionsContainer: false,
  // this state is for msg search bar
  displayMsgSearchLayout: false,
  // this state is for group info
  displayGroupInfoLayout: false,
};

export function displayProfileReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_PROFILE:
      return {
        ...state,
        displayProfileContainer: action.payload,
      };
    case HIDE_PROFILE:
      return {
        ...state,
        displayProfileContainer: action.payload,
      };
    default:
      return state;
  }
}

// export function settingsToProfileReducer(state = initialState, action) {
//   switch (action.type) {
//     case LINK_SETTINGS_AND_PROFILE:
//       return {
//         ...state,
//         displayProfileContainer: action.payload,
//       };
//     case HIDE_PROFILE:
//       return {
//         ...state,
//         displayProfileContainer: action.payload,
//       };
//     default:
//       return state;
//   }
// }
export function displayStatusReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_STATUS:
      return {
        ...state,
        displayStatusContainer: action.payload,
      };
    case HIDE_STATUS:
      return {
        ...state,
        displayStatusContainer: action.payload,
      };
    default:
      return state;
  }
}
export function displayChatReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_CHAT:
      return {
        ...state,
        displayChatContainer: !state.displayChatContainer,
      };
    default:
      return state;
  }
}
export function displayOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_OPTIONS:
      return {
        ...state,
        displayOptionsContainer: !state.displayOptionsContainer,
      };
    default:
      return state;
  }
}
// reducer for msg search bar
export function displayMsgSearchBarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MSG_SEARCH:
      return {
        ...state,
        displayMsgSearchLayout: !state.displayMsgSearchLayout,
      };
    default:
      return state;
  }
}
// reducer for group info
export function displayGroupInfo(state = initialState, action) {
  switch (action.type) {
    case SHOW_GROUP_INFO:
      return {
        ...state,
        displayGroupInfoLayout: action.payload,
      };
    case HIDE_GROUP_INFO:
      return {
        ...state,
        displayGroupInfoLayout: action.payload,
      };
    default:
      return state;
  }
}

// reducers for options
const optionsInitialState = {
  displayNewGroup: false,
  displayArchive: false,
  displayStarredMsgs: false,
  displaySettings: false,
  logout: false,
  displaySecurity: false,
  displayPrivacyPage: false,
};

export function newGroupReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_GROUP:
      return {
        ...state,
        displayNewGroup: !state.displayNewGroup,
      };
    default:
      return state;
  }
}
export function archiveReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_ARCHIVE:
      return {
        ...state,
        displayArchive: !state.displayArchive,
      };
    default:
      return state;
  }
}
export function starredMsgsReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_STARRED_MSGS:
      return {
        ...state,
        displayStarredMsgs: !state.displayStarredMsgs,
      };
    default:
      return state;
  }
}
// export function settingsReducer(state = optionsInitialState, action) {
//   switch (action.type) {
//     case TOGGLE_SETTINGS:
//       return {
//         ...state,
//         displaySettings: !state.displaySettings,
//       };
//     default:
//       return state;
//   }
// }
export function displaySettingsReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_SETTINGS:
      return {
        ...state,
        displaySettings: action.payload,
      };

    default:
      return state;
  }
}
export function displaySecurityReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_SECURITY:
      return {
        ...state,
        displaySecurityPage: action.payload,
      };

    default:
      return state;
  }
}
export function displayPrivacyReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PRIVACY:
      return {
        ...state,
        displayPrivacyPage: action.payload,
      };

    default:
      return state;
  }
}
export function logoutReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logout: !state.logout,
      };
    default:
      return state;
  }
}
// reducers for settings sub menu
const settingsInitialState = {
  displayNotification: false,
  displayTheme: false,
  displayWallpaper: false,
  displayBlockedContacts: false,
  displayKeyboardShortcuts: false,
  displayHelp: false,
};

export function notificationReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_NOTIFICATION:
      return {
        ...state,
        displayNotification: !state.displayNotification,
      };
    default:
      return state;
  }
}
export function themeReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        displayTheme: !state.displayTheme,
      };
    default:
      return state;
  }
}
export function wallpaperReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_CHAT_WALLPAPER:
      return {
        ...state,
        displayWallpaper: !state.displayWallpaper,
      };
    default:
      return state;
  }
}

export function blockedContactsReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_BLOCKED_CONTACTS:
      return {
        ...state,
        displayBlockedContacts: !state.displayBlockedContacts,
      };
    default:
      return state;
  }
}

export function keyboardShortcutsReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_KEYBOARD_SHORTCUTS:
      return {
        ...state,
        displayKeyboardShortcuts: action.payload,
      };
    default:
      return state;
  }
}
export function helpReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_HELP:
      return {
        ...state,
        displayHelp: !state.displayHelp,
      };
    default:
      return state;
  }
}

const selectContactsInitialState = {
  displayContactName: [],
};
// reducer for selecting contacts
export function selectContactReducer(
  state = selectContactsInitialState,
  action
) {
  switch (action.type) {
    case SELECT_CONTACTS:
      return {
        ...state,
        displayContactName: action.payload,
      };
    default:
      return state;
  }
}
const groupInitialStates = {
  displayGrpParticipants: false,
  displayStarredGrpMsgs: false,
  displayGrpMsgSection: false,
};
// reducer for group participants
export function selectGroupParticipantsReducer(
  state = groupInitialStates,
  action
) {
  switch (action.type) {
    case SEARCH_GROUP_PARTICIPANTS:
      return {
        ...state,
        displayGrpParticipants: action.payload,
      };
    case CLOSE_SEARCH_GROUP_PARTICIPANTS:
      return {
        ...state,
        displayGrpParticipants: action.payload,
      };
    default:
      return state;
  }
}
// starred for group msgs
export function starredGrpMsgReducer(state = groupInitialStates, action) {
  switch (action.type) {
    case TOGGLE_GRP_STARRED_MSGS:
      return {
        ...state,
        displaySconversationIdStatetarredGrpMsgs: !state.displayStarredGrpMsgs,
      };
    default:
      return state;
  }
}
// display group msg
export function displayGrpMsgSectionReducer(
  state = groupInitialStates,
  action
) {
  switch (action.type) {
    case SHOW_GROUP_MSG:
      return {
        ...state,
        displayGrpMsgSection: action.payload,
      };
    default:
      return state;
  }
}

const contactInfoStates = {
  displayContactInfo: false,
  displaySearchContactMsg: false,
};

export function displayContactInfoReducer(state = contactInfoStates, action) {
  switch (action.type) {
    case DISPLAY_CONTACT_INFO:
      return {
        ...state,
        displayContactInfo: action.payload,
      };
    default:
      return state;
  }
}
export function SearchContactMsgReducer(state = contactInfoStates, action) {
  switch (action.type) {
    case SEARCH_CONTACT_MSG:
      return {
        ...state,
        displaySearchContactMsg: action.payload,
      };
    default:
      return state;
  }
}

const directMsgsInitialStates = {
  displayConversation: false,
  displayMessage: false,
};

// display user conversations
export function displayConversationsReducer(
  state = directMsgsInitialStates,
  action
) {
  switch (action.type) {
    case SHOW_CONVERSATIONS:
      return {
        ...state,
        displayConversation: action.payload,
      };
    default:
      return state;
  }
}
// display user conversations

export function displayMessageReducer(state = directMsgsInitialStates, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        displayConversation: !state.displayMessage,
      };
    default:
      return state;
  }
}
const conversationIdState = {
  displayChatId: '',
};
export function displayConversationIdReducer(
  state = conversationIdState,
  action
) {
  switch (action.type) {
    case SHOW_CONVERSATION_ID:
      return {
        displayChatId: action.payload,
      };
    default:
      return state;
  }
}
const messageState = {
  getMessage: null,
};
export function getMessageReducer(state = messageState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        getMessage: action.payload,
      };
    default:
      return state;
  }
}
// get Token
const tokenState = {
  data: [],
};
export function getTokenReducer(state = tokenState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
// get get contact profile
const getContactProfileState = {
  data: [],
};
export function getContactProfileReducer(
  state = getContactProfileState,
  action
) {
  switch (action.type) {
    case GET_CONTACT_CHAT_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
